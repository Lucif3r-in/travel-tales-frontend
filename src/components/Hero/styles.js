import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  appBarSearch: {
    borderRadius: 4,
    marginBottom: "1rem",
    display: "flex",
    alignItems: "flex-end",
    gap: "10px",
  },
  searchText: {
    backgroundColor: "white",
    borderRadius: 4,
    width: "100%",
  },
  quoteText: {
    color: "white",
    textAlign: "center",
    marginBottom: theme.spacing(2),
  },
  mainContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  pagination: {
    margin: "auto",
    width: "max-content",
    background: "#fff",
    borderRadius: 4,
    marginTop: "1rem",
    padding: "16px",
    color: "white",
  },
  gridContainer: {
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column-reverse",
    },
  },
  centerButton: {
    display: "flex",
    justifyContent: "center",
    marginBottom: theme.spacing(2),
  },
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
}));
