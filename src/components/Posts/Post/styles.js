import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  media: {
    height: 0,
    paddingTop: "60%",
  },
  tagChip: {
    margin: theme.spacing(0.5),
    overflowX: "auto",
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
    boxShadow: "-15px -15px 15px #fff1, ",

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
  cardContent: {
    padding: 0,
  },
  grid: {
    display: "flex",
  },
  details: {
    display: "flex",
    justifyContent: "flex-start",
    margin: "20px 0 20x 0",
    padding: "8px",
    borderRadius: "15px",
    color: "white",
  },
  title: {
    padding: "0 16px",
    color: "white",
  },
  cardActions: {
    padding: "0 16px 8px 2px",
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
