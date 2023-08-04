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
      <Container
        maxWidth="xl"
        style={{
          height: "100vh",
          padding: "0px",
          margin: "0px",
        }}
      >
        <Navbar />
        <Switch>
          <Route path="/" exact component={Homepage} />{" "}
          <Route path="/posts" exact component={Hero} />
          <Route path="/posts/search" exact component={Hero} />
          <Route path="/posts/:id" component={PostDetails} />
          <Route
            path="/auth"
            exact
            component={() => (!user ? <Auth /> : <Redirect to="/posts" />)}
          />
        </Switch>
        <Footer />
      </Container>
    </BrowserRouter>
  );
};

export default App;
