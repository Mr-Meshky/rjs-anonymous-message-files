import { Grid } from "@mui/material";
import { Comment } from "react-loader-spinner";

function Loader() {
  return (
    <Grid
      container
      height="calc(100vh - 190px)"
      alignItems="center"
      justifyContent="center"
    >
      <Comment
        visible={true}
        height="80"
        width="80"
        ariaLabel="comment-loading"
        wrapperStyle={{}}
        wrapperClass="comment-wrapper"
        color="#fff"
        backgroundColor="#1976d2"
      />
    </Grid>
  );
}

export default Loader;
