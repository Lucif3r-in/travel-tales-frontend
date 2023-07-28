import React, { useEffect } from "react";
import {
  Paper,
  Typography,
  CircularProgress,
  Divider,
  Chip,
} from "@material-ui/core/";
import moment from "moment";
import { Link, useParams, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import useStyles from "./styles";
import { getPost, getPostsBySearch } from "../../actions/posts";
import CommentSection from "./CommentSection";

const PostDetails = () => {
  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();

  const { id } = useParams();
  const { posts, post, isLoading } = useSelector((state) => state.posts);

  useEffect(() => {
    dispatch(getPost(id));
  }, [id]);

  useEffect(() => {
    if (post) {
      dispatch(
        getPostsBySearch({ search: "none", tags: post?.tags.join(",") })
      );
    }
  }, [post]);

  if (!post) return <Typography align="center">No post found</Typography>;

  if (isLoading) {
    return (
      <Paper elevation={6} className={classes.loadingPaper}>
        <CircularProgress size="7em" />
      </Paper>
    );
  }

  const openPost = (_id) => history.push(`/posts/${_id}`);

  const recommendedPosts = posts.filter(({ _id }) => _id !== post._id);

  return (
    <Paper
      style={{
        borderRadius: "20px",
        width: "90%",
        margin: "auto",
        padding: "20px",
      }}
      elevation={6}
    >
      <div className={classes.card}>
        <div className={classes.section}>
          <Typography variant="h3" component="h2">
            {post.title}
          </Typography>
          <Typography
            gutterBottom
            variant="h6"
            color="textSecondary"
            component="h2"
          >
            {post.tags.map((tag, index) => (
              <Chip
                key={index}
                label={`${tag}`}
                component="a"
                href={`/tags/${tag}`}
                clickable
                color="primary"
                variant="default"
                className={classes.tagChip}
              />
            ))}
          </Typography>
          <Typography gutterBottom variant="body1" component="p">
            {post.message}
          </Typography>
          <Typography variant="h6">
            Created by:
            <Link
              to={`/creators/${post.name}`}
              style={{ textDecoration: "none", color: "#3f51b5" }}
            >
              {` ${post.name}`}
            </Link>
          </Typography>
          <Typography variant="body1">
            {moment(post.createdAt).fromNow()}
          </Typography>
          <Divider style={{ margin: "20px 0" }} />
          <CommentSection post={post} />
          <Divider style={{ margin: "20px 0" }} />
        </div>
        <div className={classes.imageSection}>
          <img
            className={classes.media}
            src={
              post.selectedFile ||
              "https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png"
            }
            alt={post.title}
          />
        </div>
      </div>
    </Paper>
  );
};

export default PostDetails;
