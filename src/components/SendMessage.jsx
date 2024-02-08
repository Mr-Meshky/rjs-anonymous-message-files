import { useState } from "react";
import toast from "react-hot-toast";
import { Button, Grid, TextField, Typography } from "@mui/material";

import { whatLanguage } from "../utils/helper";
import { sendMessage } from "../services/message";

function SendMessage({ slug, name, setStep }) {
  const [text, setText] = useState("");
  const submitHandler = (e) => {
    e.preventDefault();

    if (!text.length) {
      toast.error("لطفا متنی را وارد نمایید");
      return;
    }
    sendMessage(text, slug)
      .then((res) => {
        toast.success("پیام شما با موفقیت ارسال شد");
        setStep(2);
      })
      .catch((err) => toast.err("مشکلی پیش آمد مجدد تلاش نمایید"));
  };

  return (
    <>
      <Grid item xs={12} mb={2} mt={4} textAlign="center">
        <Typography component="p" variant="p" fontWeight="400" color="gray">
          هر چیزی رو که همیشه دوست داشتی ناشناس به{" "}
          <Typography component="span" variant="span" color="Highlight">
            {name}
          </Typography>{" "}
          بگی رو بنویس و بدون اینکه شناخته بشی واسش بفرست
        </Typography>
      </Grid>

      <form onSubmit={submitHandler}>
        <Grid item xs={12} md={8.5} margin="auto">
          <TextField
            fullWidth
            multiline
            rows={5}
            value={text}
            dir={whatLanguage(text)}
            onChange={(e) => setText(e.target.value)}
            placeholder="پیام خودتو بنویس"
          />
        </Grid>
        <Grid item xs={12} md={8.5} sx={{ marginTop: "20px" }} margin="auto">
          <Button
            variant="contained"
            fullWidth
            sx={{ height: "45px" }}
            type="submit"
          >
            ارسال پیام
          </Button>
        </Grid>
      </form>
    </>
  );
}

export default SendMessage;
