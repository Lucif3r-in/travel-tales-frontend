import React, { useState } from "react";
import {
  Container,
  Grow,
  Grid,
  Paper,
  AppBar,
  TextField,
  Button,
  Modal,
  Typography,
} from "@material-ui/core";
import { useDispatch } from "react-redux";
import { getPostsBySearch } from "../../middleware/posts";
import Posts from "../Posts/Posts";
import Form from "../Form/Form";
import Paging from "../Paging/Paging";
import { useLocation, useHistory } from "react-router-dom";
import useStyles from "./styles";

const myArray = [
  "I haven’t been everywhere, but it’s on my list.",
  "Work, Travel, Save, Repeat.",
  "Can we just skip to the part of my life where I travel the world?",
  "Vacation calories don’t count. Right?",
  "I want someone to look at me the way I look at a travel magazine.",
  "The worst thing about being a tourist is having other tourists recognize you as a tourist.",
  "Man cannot discover new oceans unless he has the courage to lose sight of the shore.",
  "Remember that happiness is a way of travel – not a destination.",
  "The most beautiful in the world is, of course, the world itself.",
  "Traveling – it leaves you speechless, then turns you into a storyteller.",
  "We travel, some of us forever, to seek other states, other lives, other souls.",
  "I travel not to go anywhere, but to go. I travel for travel’s sake. The great affair is to move.",
  "Jobs fill your pocket, but adventures fill your soul.",
  "To Travel is to Live.",
  "Life is either a daring adventure or nothing at all.",
  "Blessed are the curious for they shall have adventures.",
];
const randomElement = myArray[Math.floor(Math.random() * myArray.length)];
function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const Hero = () => {
  const [currentId, setCurrentId] = useState(0);
  const [isFormModalOpen, setIsFormModalOpen] = useState(false);
  const dispatch = useDispatch();
  const styles = useStyles();
  const query = useQuery();
  const history = useHistory();
  const page = query.get("page") || 1;
  const searchQuery = query.get("searchQuery");
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
        history.push("/posts");
      }
    } else {
      history.push("/posts");
    }
  };

  const handleKeyPress = (e) => {
    if (e.keyCode === 13) {
      searchPost();
    }
  };

  const handleCreateTale = () => {
    setIsFormModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsFormModalOpen(false);
  };

  return (
    <Grow in>
      <Container maxWidth="xl">
        <Grid container spacing={3} className={styles.mainContainer}>
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
              <Typography
                variant="h5"
                align="center"
                className={styles.quoteText}
              >
                <p>{randomElement}</p>
              </Typography>
              <div className={styles.centerButton}>
                <Button
                  color="primary"
                  variant="contained"
                  onClick={handleCreateTale}
                >
                  Create a Tale
                </Button>
              </div>
              <Modal
                open={isFormModalOpen}
                onClose={handleCloseModal}
                aria-labelledby="create-tale-modal"
                aria-describedby="create-tale-form"
                className={styles.modal}
              >
                <div>
                  <Form currentId={currentId} setCurrentId={setCurrentId} />
                </div>
              </Modal>
            </div>
          </Grid>
          <Grid
            item
            xs={12}
            alignItems="center"
            justifyContent="center"
            margin="auto"
          >
            <Posts setCurrentId={setCurrentId} />
            {!searchQuery && !tags.length && (
              <Paper elevation={6} className={styles.pagination}>
                <Paging page={page} />
              </Paper>
            )}
          </Grid>
        </Grid>
      </Container>
    </Grow>
  );
};

export default Hero;
