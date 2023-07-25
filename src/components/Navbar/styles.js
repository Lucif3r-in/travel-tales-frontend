import { makeStyles } from "@material-ui/core/styles";
import { deepPurple } from "@material-ui/core/colors";

export default makeStyles((theme) => ({
  appBar: {
    position: "relative", // Add position relative for the shadow pseudo-element
    margin: "0 0 30px 0",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    background: "rgba(31, 31, 31, 0.75)", // Use rgba for the transparency
    boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)", // Box shadow for the glassmorphism effect
    backdropFilter: "blur(7.5px)", // This creates the glassmorphism effect
    "-webkit-backdrop-filter": "blur(7.5px)", // Add vendor-prefixed version for compatibility
    border: "1px solid rgba(31, 31, 31, 1)", // Border style
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    },
  },
  appBarShadow: {
    content: "",
    position: "absolute",
    bottom: "-5px",
    left: "50%",
    transform: "translateX(-50%)",
    width: "80%",
    height: "10px",
    backgroundColor: "rgba(255, 255, 255, 0.2)", // Whitish shadow color with transparency
    borderRadius: "50%",
    zIndex: -1,
  },
  heading: {
    color: theme.palette.primary.main,
    textDecoration: "none",
    fontSize: "2em",
    fontWeight: 300,
  },
  title: {
    fontFamily: "'Lobster', cursive",
    color: "#3f51b5",
    padding: "0 20px",
  },
  toolbar: {
    display: "flex",
    justifyContent: "flex-end",
    width: "400px",
    [theme.breakpoints.down("sm")]: {
      width: "auto",
    },
  },
  profile: {
    display: "flex",
    justifyContent: "flex-end",
    width: "400px",
    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
      width: "auto",
      marginTop: 20,
      justifyContent: "center",
    },
  },
  logout: {
    marginLeft: "20px",
  },
  userName: {
    display: "flex",
    alignItems: "center",
    textAlign: "center",
  },
  brandContainer: {
    display: "flex",
    alignItems: "center",
    textDecoration: "none",
    color: "black",
    fontWeight: "bolder",
  },
  purple: {
    color: theme.palette.getContrastText(deepPurple[500]),
    backgroundColor: deepPurple[500],
  },
}));
