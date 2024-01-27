import { createTheme, responsiveFontSizes } from "@mui/material/styles";

// Define your custom theme
const theme = (mode) =>
  responsiveFontSizes(
    createTheme({
      palette: {
        mode: mode,
      },
    })
  );

export default theme;
