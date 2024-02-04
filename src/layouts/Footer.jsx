import { Typography } from "@mui/material";

function Footer() {
  return (
    <footer>
      <Typography
        component="p"
        variant="p"
        bgcolor="#f7f7f7"
        color="primary"
        padding="10px"
        textAlign="center"
        mt={10}
      >
        توسعه داده شده با ❤️ توسط{" "}
        <a
          href="https://mrmeshky.ir"
          style={{ textDecoration: "none", color: "gray" }}
        >
          مسترمشکی
        </a>
      </Typography>
    </footer>
  );
}

export default Footer;
