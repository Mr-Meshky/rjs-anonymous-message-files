import toast from "react-hot-toast";
import { useQuery } from "@tanstack/react-query";
import { Button, Container, Grid, ImageList, Typography } from "@mui/material";

import { getProfile } from "../services/user";

import notfound from "./../assets/images/messagenotfound.png";

function MessageNotfound() {
  const { data: prof } = useQuery(["profile"], getProfile);

  const copyHandler = () => {
    window.navigator.clipboard.writeText(
      `${location.origin}/send-message/${prof.data.slug}`
    );
    toast.success("لینک پیام ناشناس شما کپی شد");
  };

  return (
    <Container maxWidth="lg">
      <Grid container px={3} height="calc(100vh - 200px)" textAlign="center">
        <Grid item xs={12} mt={5} mb={2}>
          <Typography
            component="h3"
            variant="h4"
            fontWeight="600"
            color="#ff725e"
          >
            هنوز پیامی برای شما ارسال نشده است
          </Typography>
        </Grid>

        <Grid item xs={12}>
          <img
            src={notfound}
            alt="پیامی وجود ندارد"
            loading="lazy"
            className="image"
          />
        </Grid>

        <Grid item xs={12}>
          <Typography
            component="p"
            variant="p"
            fontWeight="600"
            mb={2}
            color="gray"
          >
            از دوستاتون بخواهید بدون اینکه شناخته بشن هر چی تو دلشون هست رو به
            صورت پیام ناشناس براتون بفرستن
          </Typography>
          <Button
            variant="contained"
            sx={{ height: "45px" }}
            onClick={copyHandler}
          >
            کپی کردن لینک
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
}

export default MessageNotfound;
