"use client";

import React, { useEffect, useRef, useState } from "react";
import { useAppDispatch } from "../store/store";
import { toggleTodo, deleteTodo, editTodo, Todo } from "../store/todoSlice";
import Swal from "sweetalert2";
import { MoreVertical, ListCheckIcon, List } from "lucide-react";
import ProgressBar from "./ProgressBar";
import DateO from "./DateO"; 
import CelebrationBackground from "./CelebrationBackground";

interface Props {
  todo: Todo;
  progress: number; 
}

export default function TodoItem({ todo, progress }: Props) {
  const dispatch = useAppDispatch();
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("click", handler);
    return () => document.removeEventListener("click", handler);
  }, []);

  const handleView = () => {
    Swal.fire("Task", `${todo.text}\n${todo.subtitle ?? ""}`, "info");
  };

  const handleEdit = async () => {
    const { value: values } = await Swal.fire({
      title: "Edit Task",
      html: `
        <input id="title" class="swal2-input" placeholder="Title" value="${todo.text}" />
        <input id="subtitle" class="swal2-input" placeholder="Subtitle" value="${todo.subtitle ?? ""}" />
      `,
      focusConfirm: false,
      showCancelButton: true,
      preConfirm: () => {
        const title = (document.getElementById("title") as HTMLInputElement).value;
        const subtitle = (document.getElementById("subtitle") as HTMLInputElement).value;
        if (!title) {
          Swal.showValidationMessage("Title is required");
        }
        return { title, subtitle };
      },
    });

    if (values) {
      dispatch(editTodo({ id: todo.id, newText: values.title, newSubtitle: values.subtitle }));
      Swal.fire("Updated!", "Task updated.", "success");
    }
  };

  const handleDelete = () => {
    Swal.fire({
      title: "Delete this task?",
      icon: "warning",
      showCancelButton: true,
    }).then((res) => {
      if (res.isConfirmed) {
        dispatch(deleteTodo(todo.id));
        Swal.fire("Deleted!", "Task removed.", "success");
      }
    });
  };

  return (
    <div className=" py-4 dark:border-gray-700 space-y-2 border-2 border-gray-200 shadow-lg px-3">
        {/* 🎉 Celebration background */}
      <CelebrationBackground completed={todo.completed} />
      
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => dispatch(toggleTodo(todo.id))}
            className="w-5 h-5 "
          />
          <span
            className={`font-Semibold break-words whitespace-normal${
              todo.completed ? "line-through " : "dark:text-white"
            }`}
          >
            {todo.text}
          </span>
        </div>

        <div className="relative" ref={menuRef}>
          <button
            onClick={(e) => {
              e.stopPropagation();
              setMenuOpen((p) => !p);
            }}
            className="p-2 rounded-full bg-gray-200 dark:hover:bg-gray-700"
          >
            <MoreVertical className="w-5 h-5 text-gray-600 dark:text-gray-300" />
          </button>

          {menuOpen && (
            <ul className="absolute right-0 mt-2 w-40 bg-white text-black shadow-lg rounded-md text-sm z-5">
              <li>
                <button
                  onClick={handleView}
                  className="w-full text-center px-4 py-2 hover:bg-gray-100 "
                >
                  View
                </button>
              </li>
              <li>
                <button
                  onClick={handleEdit}
                  className="w-full text-center px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  Edit
                </button>
              </li>
              <li>
                <button
                  onClick={handleDelete}
                  className="w-full text-center px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 text-red-500"
                >
                  Delete
                </button>
              </li>
            </ul>
          )}
        </div>
      </div>

      {todo.subtitle && (
        <div>
          <span className={`text-md text-dark break-words whitespace-normal${
              todo.completed ? "line-through" : "dark:text-white"
            }`}>{todo.subtitle}</span>
          
        </div>
      )}

        <div className="flex justify-between">
       {todo.completed ? <div className="flex space-x-2"><ListCheckIcon/><p>Completed</p></div> : <div className="flex space-x-2"><List/><p>In Progress</p></div>}
       <div>{todo.completed ? "10/10 done" : "5/10"}</div>
       </div>
      <ProgressBar completed={todo.completed} />

      <div>
        <DateO />
      </div>
    </div>
  );
}
