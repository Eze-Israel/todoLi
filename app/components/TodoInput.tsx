"use client";

import { useState } from "react";
import { useAppDispatch } from "../store/store";
import { addTodo } from "../store/todoSlice";

export default function TodoInput() {
  const [text, setText] = useState("");
  const dispatch = useAppDispatch();

  const handleAdd = () => {
    if (text.trim() === "") return;
    dispatch(addTodo(text));
    setText("");
  };

  return (
    <div className="flex gap-2 p-4">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add a new task..."
        className="flex-1 px-3 py-2 border rounded-md dark:bg-darkBg dark:text-white"
      />
      <button
        onClick={handleAdd}
        className="px-4 py-2 bg-primary text-white rounded-md hover:opacity-90"
      >
        Add
      </button>
    </div>
  );
}
