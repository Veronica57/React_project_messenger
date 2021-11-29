import { createContext, useState, useCallback } from "react";
import { ThemeProvider, createTheme } from "@mui/material";

export const ThemeContext = createContext();

const themes = {
  dark: {
    color: "#0d00c2",
  },
  light: "#cccae6",
};

const themesMUI = {
  dark: createTheme({
    palette: {
      primary: {
        main: "#0d00c2",
      },
    },
  }),
  light: createTheme({
    palette: {
      primary: {
        main: "#fff",
      },
    },
  }),
};

export const CustomThemeProvider = ({ children, initialTheme = "light" }) => {
  const [theme, setTheme] = useState({
    theme: themes[initialTheme],
    name: initialTheme,
  });

  const themeSetter = useCallback((name) => {
    if (themes[name]) {
      setTheme({
        name,
        theme: themes[name],
      });
    }
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, themeSetter }}>
      <ThemeProvider theme={themesMUI[theme.name]}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
};
