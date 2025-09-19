"use client";

import { useState } from "react";
import { useAppDispatch } from "../store/store";
import { toggleTodo, deleteTodo, editTodo, Todo } from "../store/todoSlice";
import Swal from "sweetalert2";
import { MoreHorizontal } from "lucide-react"; 

interface Props {
  todo: Todo;
}

export default function TodoItem({ todo }: Props) {
  const dispatch = useAppDispatch();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleView = () => {
    Swal.fire({
      title: "Task Details",
      text: todo.text,
      icon: todo.completed ? "success" : "info",
      confirmButtonText: "Close",
    });
  };

  const handleEdit = async () => {
    const { value: newText } = await Swal.fire({
      title: "Edit Task",
      input: "text",
      inputValue: todo.text,
      showCancelButton: true,
      confirmButtonText: "Save",
      inputValidator: (value) => {
        if (!value) return "Task cannot be empty!";
        return null;
      },
    });

    if (newText) {
      dispatch(editTodo({ id: todo.id, newText }));
      Swal.fire("Updated!", "Your task has been updated.", "success");
    }
  };

  const handleDelete = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "This task will be permanently deleted!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(deleteTodo(todo.id));
        Swal.fire("Deleted!", "Your task has been deleted.", "success");
      }
    });
  };

  return (
    <div className="flex items-center justify-between p-3 shadow-lg rounded-lg border-2 border-gray-200 mt-4 relative">
      {/* Checkbox and Task Text */}
      <div className="flex items-center gap-2">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => dispatch(toggleTodo(todo.id))}
          className="w-4 h-4"
        />

        <span
          className={`${
            todo.completed ? "line-through text-gray-400" : ""
          } dark:text-white`}
        >
          {todo.text}
        </span>
          <button className="text-lg text-red-500 rounded-lg ">{new Date().getFullYear()} </button>
      </div>

      {/* Three dots menu */}
      <div className="relative">
        <button
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className="p-2 rounded-full bg-white border-2 border-gray-300 "
        >
          <MoreHorizontal className="w-5 h-5 text-gray-600 dark:text-gray-500 "  />
        </button>

        {isMenuOpen && (
          <ul className="absolute right-0 mt-2 w-32 bg-white dark:bg-gray-800 shadow-lg rounded-md text-sm">
            <li>
              <button
                onClick={() => {
                  handleView();
                  setIsMenuOpen(false);
                }}
                className="w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                View
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  handleEdit();
                  setIsMenuOpen(false);
                }}
                className="w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                Edit
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  handleDelete();
                  setIsMenuOpen(false);
                }}
                className="w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 text-red-500"
              >
                Delete
              </button>
            </li>
          </ul>
        )}
      </div>
    </div>
  );
}
