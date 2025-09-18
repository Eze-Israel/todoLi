// app/store/store.ts
import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./todoSlice";
import themeReducer from "./themeSlice";

export const store = configureStore({
  reducer: {
    todos: todoReducer,
    theme: themeReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

/**
 * Typed hooks for components so selectors/dispatch are typed correctly.
 * Put these exports where it's convenient (same file is fine).
 */
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
