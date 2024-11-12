"use client";

import { useTheme } from "@/components/Theme/ThemeProvider";
import SunMoonButton from "./SunMoonButton";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  const isDarkMode = theme === "dark";

  return (
    <SunMoonButton
      isDarkMode={isDarkMode}
      toggleDarkMode={() => toggleTheme()}
    />
  );
}
