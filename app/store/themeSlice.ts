import { createSlice } from "@reduxjs/toolkit";

export type ThemeState = "light" | "dark";

const loadTheme = (): ThemeState => {
  if (typeof window !== "undefined") {
    return (localStorage.getItem("theme") as ThemeState) || "light";
  }
  return "light";
};

const themeSlice = createSlice({
  name: "theme",
  initialState: loadTheme(),
  reducers: {
    toggleTheme: (state) => {
      const newTheme = state === "light" ? "dark" : "light";
      localStorage.setItem("theme", newTheme);
      return newTheme;
    },
  },
});

export const { toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;
