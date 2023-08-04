import React from "react";
import { Container, Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import useStyles from "./styles";

const Homepage = () => {
  const classes = useStyles();

  return (
    <Container className={classes.homeContainer}>
      <div className={classes.background}>
        <div className={classes.textContainer}>
          <h1 className={classes.largeText}>
            Explore the World with
            <span className={classes.animated}> Travel Tales</span>
          </h1>
          <Button
            variant="contained"
            color="primary"
            component={Link}
            to="/posts"
            className={classes.redirectButton}
          >
            Start Your Journey
          </Button>
        </div>
      </div>
    </Container>
  );
};

export default Homepage;
