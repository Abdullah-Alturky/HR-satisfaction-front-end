import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "@emotion/react";
import theme from "./theme";
import { RouterProvider } from "react-router-dom";
import router from "./routes";
import { useThemeMode } from "./contexts/ThemeModeProvider";

function App() {
  const { themeMode } = useThemeMode();
  return (
    <ThemeProvider theme={theme(themeMode)}>
      <CssBaseline />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
