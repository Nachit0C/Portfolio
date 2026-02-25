import { useState, useEffect, useMemo } from 'react'
import { createTheme } from "@mui/material/styles";
import { getDesignTokens } from '../styles/theme';

function getNavigatorTheme() {
  const prefersDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
  return prefersDarkMode ? "dark" : "light";
}

function getInitialTheme() {
  const storedTheme = localStorage.getItem("theme");
  return storedTheme ? storedTheme === "dark" : getNavigatorTheme() === "dark";
}
export function useTheme() {
  const [darkMode, setDarkMode] = useState(getInitialTheme());

  useEffect(() => {
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  const theme = useMemo(() => {
    const mode = darkMode ? 'dark' : 'light';
    return createTheme(getDesignTokens(mode));
  }, [darkMode]);

  return { theme, darkMode, setDarkMode };
}