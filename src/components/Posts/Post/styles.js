import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  media: {
    height: 0,
    paddingTop: "76.25%",
  },
  tagChip: {
    margin: theme.spacing(0.5),
  },
  fullHeightCard: {
    height: "100%",
  },
  card: {
    display: "flex",
    flexDirection: "column",
    borderRadius: "15px",
    height: "auto",
    position: "relative",
    cursor: "pointer",

    "&:hover $overlay": {
      opacity: 1,
    },
    boxShadow:
      "-15px -15px 15px #fff1, inset -15px -15px 15px #fff1, 15px 15px 15px #0004, inset 15px 15px 15px #0004",

    background: "#2c2c2c",
    color: "white",
  },
  overlay: {
    position: "absolute",
    top: "0",
    left: "0",
    width: "100%",
    height: "12%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    background: "rgba(0, 0, 0, 0.6)",
    color: "white",
    opacity: 0,
    transition: "opacity 0.3s ease-in-out",
  },
  overlay2: {
    position: "absolute",
    top: "20px",
    right: "20px",
    color: "white",
  },
  grid: {
    display: "flex",
  },
  details: {
    display: "flex",
    justifyContent: "flex-start",
    margin: "20px",
    padding: "8px",
    borderRadius: "15px",
    color: "white",
  },
  title: {
    padding: "0 16px",
    color: "white",
  },
  cardActions: {
    padding: "0 16px 8px 16px",
    display: "flex",
    justifyContent: "space-between",
  },
  cardAction: {
    display: "block",
    textAlign: "initial",
  },
  truncatedMessage: {
    color: "white",
    display: "-webkit-box",
    "-webkit-line-clamp": 3,
    "-webkit-box-orient": "vertical",
    overflow: "hidden",
    textOverflow: "ellipsis",
    [theme.breakpoints.down("sm")]: {
      "-webkit-line-clamp": 2,
    },
  },
}));
