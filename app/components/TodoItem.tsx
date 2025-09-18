"use client";

import { useState } from "react";
import { useAppDispatch } from "../store/store";
import { toggleTodo, deleteTodo, editTodo, Todo } from "../store/todoSlice";

interface Props {
  todo: Todo;
}

export default function TodoItem({ todo }: Props) {
  const dispatch = useAppDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(todo.text);

  const handleSave = () => {
    if (newText.trim()) {
      dispatch(editTodo({ id: todo.id, newText }));
      setIsEditing(false);
    }
  };

  return (
    <div
      className="flex items-center justify-between p-3 border-b dark:border-gray-700"
    >
      <div className="flex items-center gap-2">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => dispatch(toggleTodo(todo.id))}
          className="w-4 h-4"
        />

        {isEditing ? (
          <input
            type="text"
            value={newText}
            onChange={(e) => setNewText(e.target.value)}
            className="px-2 py-1 border rounded dark:bg-darkBg dark:text-white"
          />
        ) : (
          <span
            className={`${
              todo.completed ? "line-through text-gray-400" : ""
            } dark:text-white`}
          >
            {todo.text}
          </span>
        )}
      </div>

      <div className="flex gap-2">
        {isEditing ? (
          <button
            onClick={handleSave}
            className="px-2 py-1 bg-green-500 text-white rounded-md"
          >
            Save
          </button>
        ) : (
          <button
            onClick={() => setIsEditing(true)}
            className="px-2 py-1 bg-yellow-500 text-white rounded-md"
          >
            Edit
          </button>
        )}
        <button
          onClick={() => alert(`Viewing: ${todo.text}`)}
          className="px-2 py-1 bg-blue-500 text-white rounded-md"
        >
          View
        </button>
        <button
          onClick={() => dispatch(deleteTodo(todo.id))}
          className="px-2 py-1 bg-red-500 text-white rounded-md"
        >
          Delete
        </button>
      </div>
    </div>
  );
}
