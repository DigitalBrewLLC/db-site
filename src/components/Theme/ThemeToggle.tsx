"use client";

import { useTheme } from "@/components/Theme/ThemeProvider";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  const labelThemeText = theme === "light" ? "Dark" : "Light";
  const currentThemeText = theme === "light" ? "LIGHT" : "DARK";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="p-3 rounded-lg border border-accent hover:border-accent min-w-20"
      aria-label={`Switch to ${labelThemeText} mode`}
    >
      <code className="text-accent">{currentThemeText}</code>
    </button>
  );
}
