"use client";

import { useAppSelector } from "../store/store";
import TodoItem from "./TodoItem";
import { useEffect, useState } from "react";

export default function TodoList() {
  const todos = useAppSelector((state) => state.todos.items);
  const [mounted, setMounted] = useState(false);

  // this ensures UI only renders after client hydration
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="p-4 text-gray-500">Loading…</div>;
  }

  if (todos.length === 0) {
    return <p className="p-4 text-gray-500 dark:text-gray-400">No tasks yet.</p>;
  }

  return (
    <div className="p-4 space-y-2 ">
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} progress={0} />
      ))}
    </div>
  );
}
