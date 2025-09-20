import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Todo {
  id: string;
  text: string;
  subtitle?: string;
  completed: boolean;
}

interface TodoState {
  items: Todo[];
}

const loadTodos = (): Todo[] => {
  try {
    if (typeof window !== "undefined") {
      const raw = localStorage.getItem("todos");
      return raw ? JSON.parse(raw) : [];
    }
  } catch (e) {}
  return [];
};

const initialState: TodoState = { items: loadTodos() };

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<{ text: string; subtitle?: string }>) => {
      const newTodo: Todo = {
        id: Date.now().toString(),
        text: action.payload.text,
        subtitle: action.payload.subtitle || "",
        completed: false,
      };
      state.items.unshift(newTodo);
      try {
        localStorage.setItem("todos", JSON.stringify(state.items));
      } catch (e) {}
    },
    toggleTodo: (state, action: PayloadAction<string>) => {
      const t = state.items.find((i) => i.id === action.payload);
      if (t) {
        t.completed = !t.completed;
        try {
          localStorage.setItem("todos", JSON.stringify(state.items));
        } catch (e) {}
      }
    },
    deleteTodo: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter((i) => i.id !== action.payload);
      try {
        localStorage.setItem("todos", JSON.stringify(state.items));
      } catch (e) {}
    },
    editTodo: (
      state,
      action: PayloadAction<{ id: string; newText: string; newSubtitle?: string }>
    ) => {
      const t = state.items.find((i) => i.id === action.payload.id);
      if (t) {
        t.text = action.payload.newText;
        t.subtitle = action.payload.newSubtitle ?? t.subtitle;
        try {
          localStorage.setItem("todos", JSON.stringify(state.items));
        } catch (e) {}
      }
    },
    setTodos: (state, action: PayloadAction<Todo[]>) => {
      state.items = action.payload;
      try {
        localStorage.setItem("todos", JSON.stringify(state.items));
      } catch (e) {}
    },
  },
});

export const { addTodo, toggleTodo, deleteTodo, editTodo, setTodos } = todoSlice.actions;
export default todoSlice.reducer;
