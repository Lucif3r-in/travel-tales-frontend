import React from "react";
import { Container } from "@material-ui/core";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Auth from "./components/Authentication/Auth";
import PostDetails from "./components/PostDetails/PostDetails";
import Hero from "./components/Hero/Hero";
import Footer from "./components/Footer/Footer";
import Homepage from "./components/Homepage/Homepage";

const App = () => {
  const user = JSON.parse(localStorage.getItem("profile"));

  return (
    <BrowserRouter>
      <Navbar />
      <Container
        maxWidth="xl"
        style={{
          padding: "0px",
          margin: "auto",
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
          width: "90%",
          marginTop: "2rem",
        }}
      >
        <Switch>
          <Route path="/" exact component={Homepage} />
          <Route path="/posts" exact component={Hero} />
          <Route path="/posts/search" exact component={Hero} />
          <Route path="/posts/:id" component={PostDetails} />
          <Route
            path="/auth"
            exact
            component={() => (!user ? <Auth /> : <Redirect to="/posts" />)}
          />
        </Switch>
      </Container>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
