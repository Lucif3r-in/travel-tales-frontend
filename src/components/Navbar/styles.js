import { makeStyles } from "@material-ui/core/styles";
import { deepPurple } from "@material-ui/core/colors";

export default makeStyles((theme) => ({
  appBar: {
    width: "90%",
    position: "relative",
    margin: "auto",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    background: "transparent",
    boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
    backdropFilter: "blur(2.5px)",
    WebkitBackdropFilter: "blur(2.5px)",
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
    backgroundColor: "rgba(255, 255, 255, 0.2)",
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
    color: "#fff",
    padding: "0 20px",
    display: "flex",
    flexDirection: "column",
    alignItems: "left",
    justifyContent: "center",
  },

  travelText: {
    fontSize: "1.2rem",
    fontWeight: "bold",
    color: "white",
  },
  talesText: {
    fontSize: "1.0rem",
    color: "white",
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
    gap: "20px",
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
