import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ThemeModeProvider } from "./contexts/ThemeModeProvider.jsx";
import { Toaster } from "react-hot-toast";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ThemeModeProvider>
    <App />
    <Toaster
      toastOptions={{
        success: {
          style: {
            background: "green",
          },
        },
        error: {
          style: {
            background: "red",
          },
        },
      }}
    />
  </ThemeModeProvider>
);
