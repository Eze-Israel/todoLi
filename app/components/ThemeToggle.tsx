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
      className="px-4 py-2 rounded-full transition 
                 bg-dark 
                 border border-gray-300 dark:border-gray-600"
    >
      {theme === "dark" ? "Light☀️" : "Dark🌙"}
    </button>
  );
}

