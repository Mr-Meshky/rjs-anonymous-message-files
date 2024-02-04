import { Link } from "react-router-dom";
import { AppBar, Box, Container, Toolbar, Typography } from "@mui/material";
import { useQuery } from "@tanstack/react-query";

import Avatar from "@mui/material/Avatar";

import { getProfile } from "../services/user";
import { deepOrange } from "@mui/material/colors";

function Header() {
  const { data } = useQuery(["profile"], getProfile);

  return (
    <header>
      <AppBar position="sticky">
        <Container maxWidth="lg">
          <Toolbar>
            <Typography component="h1" variant="h5" fontWeight="bold" flex={1}>
              <Link to="/" style={{ textDecoration: "none", color: "#fff" }}>
                پیام ناشناس
              </Link>
            </Typography>

            <Box display="flex" alignItems="center" height="50px">
              {data ? (
                <Link
                  to="/profile"
                  style={{ textDecoration: "none", color: "#fff" }}
                >
                  <Avatar sx={{ bgcolor: deepOrange[500] }}>
                    {data.data.displayName.split("")[0].toUpperCase()}
                  </Avatar>
                </Link>
              ) : (
                <img src="/favicon.ico" alt="پیام ناشناس" />
              )}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </header>
  );
}

export default Header;
