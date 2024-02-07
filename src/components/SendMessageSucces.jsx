import { Typography, Grid, Button } from "@mui/material";
import { Link } from "react-router-dom";

function SendMessageSucces({ name }) {
  return (
    <>
      <Grid item xs={12} textAlign="center">
        <Typography component="h3" variant="h4" fontWeight="400" color="green">
          پیام شما با موفقیت برای{" "}
          <Typography component="span" variant="span" color="Highlight">
            {name}
          </Typography>{" "}
          ارسال شد
        </Typography>
      </Grid>
      <Grid item xs={12} mt={3} textAlign="center">
        <Link to="/">
          <Button variant="outlined">ثبت نام در سایت</Button>
        </Link>
      </Grid>
    </>
  );
}

export default SendMessageSucces;
