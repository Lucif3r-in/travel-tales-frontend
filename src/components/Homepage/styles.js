import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  homeContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    maxWidth: "60%",
    margin: "auto",
    height: "75vh",
    // marginTop: "20%",
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
    [theme.breakpoints.down("sm")]: {
      fontSize: "3rem",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "2rem",
    },
  },
  redirectButton: {
    fontSize: "1rem",
    padding: "10px 40px",
    [theme.breakpoints.down("sm")]: {
      fontSize: "0.8rem",
      padding: "8px 32px",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "0.7rem",
      padding: "6px 24px",
    },
  },
}));

export default useStyles;
