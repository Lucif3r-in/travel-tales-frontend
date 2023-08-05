import React, { useState, useEffect } from "react";
import {
  TextField,
  Button,
  Typography,
  Paper,
  Link,
  CircularProgress,
} from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import FileBase from "react-file-base64";
import { createPost, updatePost } from "../../middleware/posts";
import useStyles from "./styles";
import { useHistory } from "react-router-dom";

const Form = ({ currentId, setCurrentId }) => {
  const [postData, setPostData] = useState({
    title: "",
    message: "",
    tags: "",
    selectedFile: "",
  });
  const post = useSelector((state) =>
    currentId
      ? state.posts.posts.find((message) => message._id === currentId)
      : null
  );
  const dispatch = useDispatch();
  const history = useHistory();
  const classes = useStyles();
  const user = JSON.parse(localStorage.getItem("profile"));

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (post) setPostData(post);
  }, [post]);

  const clear = () => {
    setCurrentId(0);
    setPostData({ title: "", message: "", tags: "", selectedFile: "" });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      if (currentId === 0) {
        await dispatch(createPost({ ...postData, name: user?.result?.name }));
        clear();
      } else {
        await dispatch(
          updatePost(currentId, { ...postData, name: user?.result?.name })
        );
        clear();
      }
      setTimeout(() => {
        window.location.reload();
      }, 10000);

      history.push("/posts");
    } catch (err) {
      setError(err.message);
      setIsSubmitting(false);
    }
  };

  if (!user?.result?.name) {
    return (
      <Link href="/auth" style={{ textDecoration: "none", color: "black" }}>
        <Paper className={classes.paper}>
          <Typography variant="h6" align="center">
            Sign in to add tales.
          </Typography>
        </Paper>
      </Link>
    );
  }

  return (
    <Paper className={classes.paper} elevation={6}>
      <form
        autoComplete="off"
        noValidate
        className={`${classes.root} ${classes.form}`}
        onSubmit={handleSubmit}
      >
        {error && (
          // Display the error message if there is an error during form submission
          <Typography color="error" variant="subtitle1">
            Error: {error}
          </Typography>
        )}
        <Typography variant="h6">
          {currentId ? `Editing "${post.title}"` : "Creating a tale"}
        </Typography>
        <TextField
          name="title"
          variant="outlined"
          label="Title"
          fullWidth
          value={postData.title}
          onChange={(e) => setPostData({ ...postData, title: e.target.value })}
        />
        <TextField
          name="message"
          variant="outlined"
          label="Message"
          fullWidth
          multiline
          minRows={4}
          value={postData.message}
          onChange={(e) =>
            setPostData({ ...postData, message: e.target.value })
          }
        />
        <TextField
          name="tags"
          variant="outlined"
          label="Tags (coma separated)"
          fullWidth
          value={postData.tags}
          onChange={(e) =>
            setPostData({ ...postData, tags: e.target.value.split(",") })
          }
        />
        <div className={classes.fileInput}>
          <FileBase
            type="file"
            multiple={false}
            onDone={({ base64 }) =>
              setPostData({ ...postData, selectedFile: base64 })
            }
          />
        </div>
        <Button
          className={classes.buttonSubmit}
          variant="contained"
          color="primary"
          size="large"
          type="submit"
          fullWidth
        >
          {isSubmitting ? <CircularProgress size={24} /> : "Submit"}
        </Button>
        <Button
          variant="contained"
          color="secondary"
          size="small"
          onClick={clear}
          fullWidth
        >
          Clear
        </Button>
      </form>
    </Paper>
  );
};

export default Form;
