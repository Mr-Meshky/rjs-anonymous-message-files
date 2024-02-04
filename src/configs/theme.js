import { createTheme } from "@mui/material";

const theme = createTheme({
  typography: {
    fontFamily: `"Vazir", "Roboto", "Arial"`,
    fontWeightLight: 100,
    fontWeightRegular: 200,
    fontWeightMedium: 300,
    fontWeightBold: 400,
    fontWeightHeavy: 600,
  },
  direction: "rtl",
});

export default theme;
