import React, { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("system");

  // 🌗 Detect and follow system theme automatically
  useEffect(() => {
    const systemDark = window.matchMedia("(prefers-color-scheme: dark)");

    const applyTheme = (isDark) => {
      document.documentElement.classList.toggle("dark", isDark);
      setTheme(isDark ? "dark" : "light");
    };

    // Apply on load
    applyTheme(systemDark.matches);

    // Listen for OS theme changes
    const handleChange = (e) => applyTheme(e.matches);
    systemDark.addEventListener("change", handleChange);

    return () => systemDark.removeEventListener("change", handleChange);
  }, []);

  // Manual toggle
  const toggle = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };

  return (
    <ThemeContext.Provider value={{ theme, toggle }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
