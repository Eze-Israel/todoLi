import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type ThemeState = "light" | "dark";

const loadTheme = (): ThemeState => {
  if (typeof window !== "undefined") {
    const t = localStorage.getItem("theme");
    return t === "dark" ? "dark" : "light";
  }
  return "light";
};

const initialState: ThemeState = loadTheme();

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    setTheme: (state, action: PayloadAction<ThemeState>) => {
      localStorage.setItem("theme", action.payload);
      return action.payload;
    },
    toggleTheme: (state) => {
      const newTheme: ThemeState = state === "light" ? "dark" : "light";
      localStorage.setItem("theme", newTheme);
      return newTheme;
    },
  },
});

export const { setTheme, toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;
