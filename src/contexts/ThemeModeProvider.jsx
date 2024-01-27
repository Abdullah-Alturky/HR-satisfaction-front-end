import { createContext, useContext } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

export const themeModeContext = createContext({});

/**
 * Context for flags of the post to be created
 * @param {React.Component} children Who can access this context
 * @returns {React.Component}
 */
const ThemeModeProvider = ({ children }) => {
  // Context that is used to share flags of the post to be created
  const [themeMode, setThemeMode] = useLocalStorage("theme", "dark");
  const toggleTheme = () => {
    setThemeMode(themeMode === "dark" ? "light" : "dark");
  };
  return (
    <themeModeContext.Provider
      value={{
        themeMode,
        toggleTheme,
      }}
    >
      {children}
    </themeModeContext.Provider>
  );
};
/**
 * Custom hook used to provide post flags context
 *
 * @returns {React.Context}
 */
const useThemeMode = () => {
  return useContext(themeModeContext);
};

export { ThemeModeProvider, useThemeMode };
