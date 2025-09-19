"use client";

import { useState } from "react";
import { useAppDispatch } from "../store/store";
import { addTodo } from "../store/todoSlice";
import Swal from "sweetalert2";

export default function TodoInput() {
  const dispatch = useAppDispatch();
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [text, setText] = useState("");
  const [subtitle, setSubtitle] = useState("");

  const handleAdd = () => {
    if (text.trim() === "") {
      Swal.fire("Oops!", "Task title cannot be empty.", "error");
      return;
    }

    dispatch(addTodo({ text, subtitle }));
    Swal.fire("Added!", "Your task has been added.", "success");

    setText("");
    setSubtitle("");
    setIsFormVisible(false);
  };

  return (
    <div className="p-4">
      {!isFormVisible ? (
        <div className="flex justify-end">
          
        <button
          onClick={() => setIsFormVisible(true)}
          className="px-4 py-2 bg-gray-100 text-black font-bold rounded-md hover:bg-gray-200 "
        >
          ➕ Add New Task
        </button>
        </div>
      ) : (
        <div className="space-y-2">
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Task title..."
            className="w-full px-3 py-2 border rounded-md text-black"
          />
          <input
            type="text"
            value={subtitle}
            onChange={(e) => setSubtitle(e.target.value)}
            placeholder="Subtitle (optional)..."
            className="w-full px-3 py-2 border rounded-md  text-black"
          />

          <div className="flex gap-2">
            <button
              onClick={handleAdd}
              className="px-4 py-2 bg-green-500 text-white rounded-md hover:opacity-90"
            >
              Save Task
            </button>
            <button
              onClick={() => setIsFormVisible(false)}
              className="px-4 py-2 bg-red-500 text-white rounded-md hover:opacity-90"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
