import axios from "axios";

const baseURL = "http://localhost:5000";

const API = axios.create({
  baseURL,
});

API.interceptors.request.use((config) => {
  const profile = JSON.parse(localStorage.getItem("profile"));
  if (profile?.token) {
    config.headers.Authorization = `Bearer ${profile.token}`;
  }
  return config;
});

const postRoutes = "/posts";
const userRoutes = "/users";

// Posts related API functions
export const fetchPostById = (id) => API.get(`${postRoutes}/${id}`);
export const fetchPosts = (page) => API.get(`${postRoutes}?page=${page}`);
export const fetchPostsBySearch = (searchQuery) =>
  API.get(
    `${postRoutes}/search?searchQuery=${searchQuery.search || "none"}&tags=${
      searchQuery.tags
    }`
  );
export const createPost = (newPost) => API.post(postRoutes, newPost);
export const likePost = (id) => API.patch(`${postRoutes}/${id}/likePost`);
export const commentPost = (comment, id) =>
  API.post(`${postRoutes}/${id}/commentPost`, { comment });
export const updatePost = (id, updatedPost) =>
  API.patch(`${postRoutes}/${id}`, updatedPost);
export const deletePost = (id) => API.delete(`${postRoutes}/${id}`);

// User related API functions
export const signIn = (formData) => API.post(`${userRoutes}/signin`, formData);
export const signUp = (formData) => API.post(`${userRoutes}/signup`, formData);
