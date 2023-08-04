import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  homeContainer: {
    position: "relative",
    display: "flex",
    top: "10%",
    maxWidth: "75%",
  },
  textContainer: {
    zIndex: 1,
    textAlign: "center",
    color: "white",
  },
  animated: {
    color: "#1169FF",
  },

  largeText: {
    fontSize: "4rem",
    fontWeight: "bold",
    marginBottom: "20px",
  },
  redirectButton: {
    fontSize: "1rem",
    padding: "10px 40px",
  },
}));

export default useStyles;
