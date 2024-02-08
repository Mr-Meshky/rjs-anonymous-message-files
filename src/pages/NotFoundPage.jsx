import { Link } from "react-router-dom";
import { Button, Grid, Typography } from "@mui/material";

import { useTitle } from "../hooks/useTitle";

import notFound from "./../assets/images/notfound.png";

function NotFoundPage() {
  useTitle("پیام ناشناس");
  return (
    <Grid
      container
      height="calc(100vh - 190px)"
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
    >
      <img src={notFound} alt="404" width="40%" />
      <Typography
        variant="h4"
        component="h3"
        fontWeight="300"
        color="red"
        sx={{ margin: "20px" }}
      >
        صفحه موردنظر پیدا نشد
      </Typography>
      <Link to="/">
        <Button variant="outlined" size="large">
          بازگشت به صفحه اصلی
        </Button>
      </Link>
    </Grid>
  );
}

export default NotFoundPage;
