import React, { useState, useEffect } from "react";
import {
  Container,
  Grow,
  Grid,
  Paper,
  AppBar,
  Button,
} from "@material-ui/core";
import TextField from "@mui/material/TextField";
import { useDispatch } from "react-redux";
import { getPostsBySearch } from "../../actions/posts";
import Posts from "../Posts/Posts";
import { useHistory } from "react-router-dom";
import useStyles from "./styles";

const Hero = () => {
  const [currentId, setCurrentId] = useState(0);
  const dispatch = useDispatch();
  const styles = useStyles();
  const history = useHistory();

  const [search, setSearch] = useState("");
  const [tags, setTags] = useState([]);

  const searchPost = () => {
    if (search.trim() !== "" || tags.length > 0) {
      if (search.trim() || tags) {
        dispatch(getPostsBySearch({ search, tags: tags.join(",") }));
        history.push(
          `/posts/search?searchQuery=${search || "none"}&tags=${tags.join(",")}`
        );
      } else {
        history.push("/");
      }
    } else {
      history.push("/");
    }
  };

  const handleKeyPress = (e) => {
    if (e.keyCode === 13) {
      searchPost();
    }
  };

  return (
    <Grow in>
      <Container maxWidth="xl">
        <Grid container justifyContent="center" alignItems="center" spacing={3}>
          <Grid item xs={12} md={6} className={styles.firstGridItem}>
            <div className={styles.searchContainer}>
              <AppBar
                className={styles.appBarSearch}
                position="static"
                color="transparent"
              >
                <TextField
                  variant="filled"
                  className={styles.searchText}
                  name="search"
                  label="Search Tale..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  onKeyPress={handleKeyPress}
                />
                <Button
                  onClick={searchPost}
                  color="primary"
                  className={styles.searchButton}
                  variant="contained"
                >
                  Search Post
                </Button>
              </AppBar>
            </div>
          </Grid>
          <Grid
            item
            xs={12}
            alignItems="center"
            justifyContent="center"
            margin="auto"
          >
            Posts Here
          </Grid>
        </Grid>
      </Container>
    </Grow>
  );
};

export default Hero;
