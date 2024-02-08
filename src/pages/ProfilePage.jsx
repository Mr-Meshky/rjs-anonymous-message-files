import toast from "react-hot-toast";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Container, Grid, TextField, Typography, Button } from "@mui/material";
import { useQuery } from "@tanstack/react-query";

import { useTitle } from "../hooks/useTitle";

import { checkSlug, getProfile, updateProfile } from "../services/user";
import { deleteCookie } from "../utils/cookie";
import { slugValidation } from "../utils/validation";
import { whatLanguage } from "../utils/helper";

function ProfilePage() {
  useTitle("پروفایل");
  const navigate = useNavigate();
  const { data, refetch } = useQuery(["profile"], getProfile);

  const [slug, setSlug] = useState(data.data.slug);
  const [displayName, setDisplayName] = useState(data.data.displayName);

  const [isLoading, setIsLoading] = useState(false);
  const [isDuplicate, setIsDuplicate] = useState("");

  useEffect(() => {
    if (slug === data.data.slug) {
      setIsDuplicate("");
      return;
    }
    if (slugValidation(slug)) {
      setIsDuplicate("notvalid");
      return;
    }

    const controller = new AbortController();
    setIsLoading(true);

    checkSlug(slug, controller.signal)
      .then((res) => {
        setIsDuplicate("no");
        setIsLoading(false);
      })
      .catch((err) => {
        if (err.name !== "AbortError") {
          setIsDuplicate("yes");
          setIsLoading(false);
        }
      });
    return () => {
      controller.abort();
    };
  }, [slug]);

  const copySlugHandler = () => {
    navigator.clipboard.writeText(`${location.origin}/send-message/${slug}`);
    toast.success("لینک پیام ناشناس شما کپی شد");
  };

  const logoutHandler = () => {
    deleteCookie();
    refetch();
    navigate("/");
  };

  const submitHandler = (e) => {
    e.preventDefault();
    updateProfile(slug, displayName)
      .then((res) => {
        toast.success("اطلاعات با موفقیت بروزرسانی شد");
        setIsDuplicate("");
        refetch();
      })
      .catch((err) => {
        toast.error("مشکلی پیش آمد مجدد تلاش نمایید");
      });
  };

  return (
    <Container maxWidth="lg">
      <Grid container height="calc(100vh - 220px)" mt={4} px={3}>
        <Grid
          item
          xs={11}
          margin="auto"
          p={2}
          sx={{
            boxShadow: "rgba(17, 12, 46, 0.15) 0px 48px 100px 0px",
            background: "#fff",
            borderRadius: "7px",
          }}
        >
          <Grid item textAlign="center">
            <Typography
              component="h3"
              variant="h4"
              fontWeight="400"
              mb={3}
              color="blue"
            >
              تنظیمات
            </Typography>
          </Grid>
          <form onSubmit={submitHandler}>
            <Grid container mt={7} px={2}>
              <Grid item xs={12}>
                <Typography component="p" variant="p" color="gray" mb={1.2}>
                  نام نمایشی شما
                </Typography>
                <TextField
                  id="outlined-required"
                  fullWidth
                  placeholder="نام شما"
                  dir={whatLanguage(displayName)}
                  value={displayName}
                  onChange={(e) => setDisplayName(e.target.value)}
                />
              </Grid>

              <Grid
                item
                xs={12}
                mt={3}
                mb={1.2}
                display="flex"
                justifyContent="space-between"
              >
                <Typography component="p" variant="p" color="gray">
                  نام کاربری شما
                </Typography>
                {isLoading ? (
                  <Typography component="p" variant="p" color="#FFCC00">
                    در حال بررسی
                  </Typography>
                ) : isDuplicate === "no" ? (
                  <Typography component="p" variant="p" color="green">
                    قابل انتخاب
                  </Typography>
                ) : isDuplicate === "yes" ? (
                  <Typography component="p" variant="p" color="#cc3300">
                    در دسترس نیست
                  </Typography>
                ) : isDuplicate === "notvalid" ? (
                  <Typography component="p" variant="p" color="#cc3300">
                    نامعتبر
                  </Typography>
                ) : null}
              </Grid>

              <Grid item xs={12}>
                <TextField
                  id="outlined-required"
                  dir="ltr"
                  fullWidth
                  placeholder="Your Username"
                  value={slug}
                  onChange={(e) => setSlug(e.target.value.toLowerCase())}
                />
              </Grid>
              <Grid item xs={12} textAlign="left">
                <Typography
                  variant="p"
                  component="p"
                  onClick={copySlugHandler}
                  fontSize="0.9rem"
                  color="Highlight"
                  style={{ cursor: "pointer" }}
                >
                  {location.origin.split("//")[1]}/send-message/{slug}
                </Typography>
              </Grid>

              <Grid
                item
                xs={12}
                display="flex"
                justifyContent="space-around"
                mt={5}
              >
                <Button
                  variant="contained"
                  sx={{ height: "45px" }}
                  type="submit"
                  disabled={
                    (isDuplicate !== "no" || slug === data.data.slug) &&
                    displayName === data.data.displayName
                  }
                >
                  بروزرسانی
                </Button>
                <Button
                  variant="outlined"
                  color="error"
                  sx={{ height: "45px" }}
                  onClick={logoutHandler}
                >
                  خروج
                </Button>
              </Grid>
            </Grid>
          </form>
        </Grid>
      </Grid>
    </Container>
  );
}

export default ProfilePage;
