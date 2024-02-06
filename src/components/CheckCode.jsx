import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { Button, Grid, TextField, Typography } from "@mui/material";

import { p2e } from "../utils/number";
import { checkOtp } from "../services/auth";
import { setCookie } from "../utils/cookie";
import { getProfile } from "../services/user";
import toast from "react-hot-toast";

function CheckCode({ email, code, setCode, setStep }) {
  const navigate = useNavigate();
  const [timer, setTimer] = useState(120);
  const { refetch } = useQuery(["profile"], getProfile);

  const submitHandler = async (e) => {
    e.preventDefault();

    const { response, error } = await checkOtp(email, code);

    if (response) {
      setCookie(response.data.accessToken);
      toast.success("ورود به سایت");
      refetch();
      navigate("/panel");
    } else {
      toast.error("کد ارسال شده صحیح نمیباشد");
    }
  };

  useEffect(() => {
    if (timer == 0) {
      setStep(1);
      setCode("");
      toast.error("زمان تایید کد به پایان رسید");
    }
  }, [timer]);

  useEffect(() => {
    setInterval(() => {
      setTimer((time) => time - 1);
    }, 1000);
  }, []);

  return (
    <Grid
      item
      md={5}
      xs={12}
      margin="auto"
      p={3.5}
      sx={{
        boxShadow: "rgba(17, 12, 46, 0.15) 0px 48px 100px 0px",
        background: "#fff",
        borderRadius: "7px",
      }}
    >
      <Grid item textAlign="center">
        <Typography
          component="h3"
          variant="h5"
          fontWeight="400"
          mb={3}
          color="secondary"
        >
          پیام ناشناس
        </Typography>
        <Typography component="h2" variant="h4" color="gray" fontWeight="600">
          ورود به وبسایت
        </Typography>
      </Grid>
      <form onSubmit={submitHandler}>
        <Grid container mt={7} px={2}>
          <Grid item xs={12}>
            <Typography component="p" variant="p" color="gray" mb={1.2}>
              کد ارسال شده را وارد نمایید
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="outlined-required"
              dir="ltr"
              fullWidth
              value={code}
              onChange={(e) => setCode(p2e(e.target.value))}
            />
          </Grid>

          <Grid item xs={12} mt={4}>
            <Typography
              component="p"
              variant="p"
              color="gray"
              fontSize="0.8rem"
            >
              ارسال مجدد کد بعد از {timer} ثانیه دیگر
            </Typography>
          </Grid>

          <Grid item xs={12} textAlign="center" mt={2}>
            <Button
              variant="contained"
              fullWidth
              sx={{ height: "45px" }}
              type="submit"
              disabled={code.length != 5}
            >
              ثبت و ادامه
            </Button>
          </Grid>
        </Grid>
      </form>
    </Grid>
  );
}

export default CheckCode;
