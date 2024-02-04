import toast from "react-hot-toast";
import { Button, Grid, TextField, Typography } from "@mui/material";

import { p2e } from "../utils/number";
import { validateEmail } from "../utils/validation";
import { sendOtp } from "../services/auth";

function SendEmail({ email, setEmail, setStep }) {
  const submitHandler = async (e) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      toast.error("ایمیل وارد شده نامعتبر است");

      return;
    }

    const { response, error } = await sendOtp(email);

    if (response) setStep(2);

    if (error) toast.error(error.message);
  };

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
      <form onSubmit={submitHandler}>
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

        <Grid container mt={7} px={2}>
          <Grid item xs={12}>
            <Typography component="p" variant="p" color="gray" mb={1.2}>
              آدرس ایمیل خود را وارد کنید
            </Typography>
          </Grid>

          <Grid item xs={12}>
            <TextField
              id="outlined-required"
              dir="ltr"
              fullWidth
              onChange={(e) => setEmail(p2e(e.target.value))}
              placeholder="example@gmail.com"
              value={email}
            />
          </Grid>

          <Grid item xs={12} textAlign="center" mt={3}>
            <Button
              variant="contained"
              fullWidth
              sx={{ height: "45px" }}
              type="submit"
            >
              ارسال کد تایید
            </Button>
          </Grid>
        </Grid>
      </form>
    </Grid>
  );
}

export default SendEmail;
