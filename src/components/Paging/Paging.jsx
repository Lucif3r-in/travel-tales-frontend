import { Pagination, PaginationItem } from "@material-ui/lab";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "../../middleware/posts";
import useStyle from "./styles";
import { useEffect } from "react";

const Paging = ({ page }) => {
  const classes = useStyle();
  const { numberOfPages } = useSelector((state) => state.posts);
  const dispatch = useDispatch();

  useEffect(() => {
    if (page) dispatch(getPosts(page));
  }, [page, dispatch]);

  return (
    <Pagination
      style={{ width: "auto" }}
      classes={{ ul: classes.ul }}
      count={numberOfPages}
      page={Number(page) || 1}
      // variant="outlined"
      color="primary"
      renderItem={(item) => (
        <PaginationItem
          {...item}
          component={Link}
          to={`/posts?page=${item.page}`}
          className={classes.paginationItem}
        />
      )}
    />
  );
};

export default Paging;
