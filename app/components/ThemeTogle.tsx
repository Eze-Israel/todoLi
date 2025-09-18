"use client";

import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../store/store";
import { toggleTheme } from "../store/themeSlice";

export default function ThemeToggle() {
  const theme = useAppSelector((state) => state.theme); 
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (typeof document !== "undefined") {
      if (theme === "dark") document.documentElement.classList.add("dark");
      else document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  return (
    <button
      onClick={() => dispatch(toggleTheme())}
      className="px-3 py-1 rounded-md border text-sm font-medium bg-primary text-white hover:opacity-90"
      aria-label="Toggle theme"
    >
      {theme === "light" ? "🌙 Dark" : "☀️ Light"}
    </button>
  );
}
