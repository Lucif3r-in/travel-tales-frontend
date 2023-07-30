import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
  ul: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    [theme.breakpoints.down("sm")]: {
      width: "auto",
    },
    paginationItem: {
      color: theme.palette.primary.main,
    },
  },
}));
