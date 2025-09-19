"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="px-4 rounded-full transition 
                 bg-white text-black
                 dark:bg-black dark:text-white
                 border border-gray-300 dark:border-gray-600"
    >
      {theme === "dark" ? "☀️" : "🌙"}
    </button>
  );
}

