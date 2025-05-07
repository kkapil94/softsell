"use client";

import { createContext, useContext, useEffect, useState } from "react";

type ThemeContextType = {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Initialize theme from local storage when component mounts
  useEffect(() => {
    // Check if we're in the browser
    if (typeof window !== "undefined") {
      const savedTheme = localStorage.getItem("theme");
      const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;

      const shouldBeDark =
        savedTheme === "dark" || (!savedTheme && prefersDark);

      setIsDarkMode(shouldBeDark);

      // Apply the theme to the HTML element
      if (shouldBeDark) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    }
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => {
      const newMode = !prevMode;

      // Save preference to localStorage
      if (typeof window !== "undefined") {
        localStorage.setItem("theme", newMode ? "dark" : "light");
      }

      // Toggle the dark class on the HTML element
      if (newMode) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }

      console.log("Theme toggled:", newMode ? "dark" : "light"); // Debug log

      return newMode;
    });
  };

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
