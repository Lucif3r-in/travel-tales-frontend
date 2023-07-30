import React from "react";
import { Container } from "@material-ui/core";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Auth from "./components/Authentication/Auth";
import PostDetails from "./components/PostDetails/PostDetails";
import useStyles from "./styles";
import Hero from "./components/Hero/Hero";

const App = () => {
  const user = JSON.parse(localStorage.getItem("profile"));
  const classes = useStyles();

  return (
    <BrowserRouter>
      <Container
        maxWidth="xl"
        style={{
          // backgroundColor: "black",
          height: "100vh",
          padding: "0px",
          margin: "0px",
        }}
      >
        <Navbar />
        <div className={classes.appBarShadow} />
        <Switch>
          <Route path="/" exact component={() => <Redirect to="/posts" />} />
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
    </BrowserRouter>
  );
};

export default App;
