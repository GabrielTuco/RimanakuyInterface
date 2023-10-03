import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "rgba(211, 119, 75, 1)",
      dark: "rgba(211, 128, 75, 1)",
      contrastText: "#fff",
    },
    secondary: {
      main: "#000000",
      dark: "#333333",
      contrastText: "#fff",
    },
  },
  typography: {
    color: "black",
    fontFamily: "Roboto, sans-serif",
  },
});
