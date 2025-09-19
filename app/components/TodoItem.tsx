// "use client";

// import { useState } from "react";
// import { useAppDispatch } from "../store/store";
// import { toggleTodo, deleteTodo, editTodo, Todo } from "../store/todoSlice";
// import Swal from "sweetalert2";
// import { MoreHorizontal } from "lucide-react"; 
// import DateO from "./DateO";


// interface Props {
//   todo: Todo;
// }

// export default function TodoItem({ todo }: Props) {
//   const dispatch = useAppDispatch();
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const handleView = () => {
//     Swal.fire({
//       title: "Task Details",
//       text: todo.text,
//       icon: todo.completed ? "success" : "info",
//       confirmButtonText: "Close",
//     });
//   };

//   const handleEdit = async () => {
//     const { value: newText } = await Swal.fire({
//       title: "Edit Task",
//       input: "text",
//       inputValue: todo.text,
//       showCancelButton: true,
//       confirmButtonText: "Save",
//       inputValidator: (value) => {
//         if (!value) return "Task cannot be empty!";
//         return null;
//       },
//     });

//     if (newText) {
//       dispatch(editTodo({ id: todo.id, newText }));
//       Swal.fire("Updated!", "Your task has been updated.", "success");
//     }
//   };

//   const handleDelete = () => {
//     Swal.fire({
//       title: "Are you sure?",
//       text: "This task will be permanently deleted!",
//       icon: "warning",
//       showCancelButton: true,
//       confirmButtonColor: "#d33",
//       cancelButtonColor: "#3085d6",
//       confirmButtonText: "Yes, delete it!",
//     }).then((result) => {
//       if (result.isConfirmed) {
//         dispatch(deleteTodo(todo.id));
//         Swal.fire("Deleted!", "Your task has been deleted.", "success");
//       }
//     });
//   };

//   return (
//     <main className="rounded-lg shadow-lg p-2">
//     <div className="flex items-center justify-between p-3 shadow-lg rounded-lg border-2 border-gray-200 mt-4 mb-15 relative">
//       {/* Checkbox and Task Text */}
//       <div className="flex items-center gap-2">
//         <input
//           type="checkbox"
//           checked={todo.completed}
//           onChange={() => dispatch(toggleTodo(todo.id))}
//           className="w-4 h-4"
//         />
//         <span
//           className={`${
//             todo.completed ? "line-through text-gray-400" : ""
//           } dark:text-white`}
//         >
//           {todo.text}
//         </span>

//         <div className="block">
//           {todo.subtitle && (
//         <p className="text-sm text-gray-500 dark:text-gray-400">
//           {todo.subtitle}
//         </p>
//       )}
//       </div>

//       </div>

//       {/* Three dots menu */}
//       <div className="relative">
//         <button
//           onClick={() => setIsMenuOpen((prev) => !prev)}
//           className="p-2 rounded-full bg-white border-2 border-gray-300 "
//         >
//           <MoreHorizontal className="w-5 h-5 text-gray-600 dark:text-gray-500 "  />
//         </button>

//         {isMenuOpen && (
//           <ul className="absolute right-0 mt-2 w-32 bg-white dark:bg-gray-800 shadow-lg rounded-md text-sm">
//             <li>
//               <button
//                 onClick={() => {
//                   handleView();
//                   setIsMenuOpen(false);
//                 }}
//                 className="w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
//               >
//                 View
//               </button>
//             </li>
//             <li>
//               <button
//                 onClick={() => {
//                   handleEdit();
//                   setIsMenuOpen(false);
//                 }}
//                 className="w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
//               >
//                 Edit
//               </button>
//             </li>
//             <li>
//               <button
//                 onClick={() => {
//                   handleDelete();
//                   setIsMenuOpen(false);
//                 }}
//                 className="w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 text-red-500"
//               >
//                 Delete
//               </button>
//             </li>
//           </ul>
//         )}
        
//       </div>
       
//     </div>
//         <DateO />
//     </main>
//   );
// }





















// "use client";

// import React, { useEffect, useRef, useState } from "react";
// import { useAppDispatch, useAppSelector } from "../store/store";
// import { toggleTodo, deleteTodo, editTodo, Todo } from "../store/todoSlice";
// import Swal from "sweetalert2";
// import "sweetalert2/dist/sweetalert2.min.css";
// import { MoreVertical } from "lucide-react";
// import ProgressBar3D from "./ProgressBar3D";
// import DateO from "./DateO";


// interface Props {
//   todo: Todo;
// }

// export default function TodoItem({ todo }: Props) {
//   const dispatch = useAppDispatch();
//   const todos = useAppSelector((s) => s.todos.items);
//   const [menuOpen, setMenuOpen] = useState(false);
//   const menuRef = useRef<HTMLDivElement | null>(null);

//   // global progress (completed / total)
//   const completedCount = todos.filter((t) => t.completed).length;
//   const progress = todos.length ? completedCount / todos.length : 0;

//   // click outside handler to close menu
//   useEffect(() => {
//     function handler(e: MouseEvent) {
//       if (!menuRef.current) return;
//       if (!menuRef.current.contains(e.target as Node)) {
//         setMenuOpen(false);
//       }
//     }
//     document.addEventListener("click", handler);
//     return () => document.removeEventListener("click", handler);
//   }, []);

  

//   // View - show details
//   const handleView = () => {
//     Swal.fire({
//       title: todo.text,
//       html: `<p style="color:#6b7280">${todo.subtitle ?? ""}</p>
//              <p style="margin-top:8px; color:#9ca3af; font-size:12px">Created: ${DateO}</p>`,
//       icon: todo.completed ? "success" : "info",
//       confirmButtonText: "Close",
//     });
//   };

//   // Edit - two fields: title + subtitle
//   const handleEdit = async () => {
//     const html = `
//       <input id="swal-input-title" class="swal2-input" placeholder="Title" value="${escapeHtml(
//         todo.text
//       )}" />
//       <input id="swal-input-sub" class="swal2-input" placeholder="Subtitle (optional)" value="${escapeHtml(
//         todo.subtitle ?? ""
//       )}" />
//     `;

//     const result = await Swal.fire({
//       title: "Edit Task",
//       html,
//       focusConfirm: false,
//       showCancelButton: true,
//       confirmButtonText: "Save",
//       preConfirm: () => {
//         const titleEl = (document.getElementById("swal-input-title") as HTMLInputElement);
//         const subEl = (document.getElementById("swal-input-sub") as HTMLInputElement);
//         if (!titleEl || !titleEl.value.trim()) {
//           Swal.showValidationMessage("Title is required");
//           return;
//         }
//         return { title: titleEl.value.trim(), subtitle: subEl?.value ?? "" };
//       },
//     });

//     if (result.isConfirmed && result.value) {
//       dispatch(editTodo({ id: todo.id, newText: result.value.title, newSubtitle: result.value.subtitle }));
//       Swal.fire("Saved!", "Task updated.", "success");
//     }
//   };

//   // Delete - confirm
//   const handleDelete = () => {
//     Swal.fire({
//       title: "Delete task?",
//       text: "This is permanent.",
//       icon: "warning",
//       showCancelButton: true,
//       confirmButtonText: "Yes, delete",
//     }).then((res) => {
//       if (res.isConfirmed) {
//         dispatch(deleteTodo(todo.id));
//         Swal.fire("Deleted", "Task removed.", "success");
//       }
//     });
//   };

//   return (
//     <div className="flex items-center justify-between border-b py-4 dark:border-gray-700">
//       {/* Left: date */}
//       <div className="w-28 text-sm text-gray-500 dark:text-gray-400 px-3">
//         {<DateO/>}
//       </div>

//       {/* Center: checkbox */}
//       <div className="flex-shrink-0 px-4">
//         <input
//           aria-label={`Toggle ${todo.text}`}
//           type="checkbox"
//           checked={todo.completed}
//           onChange={() => dispatch(toggleTodo(todo.id))}
//           className="w-5 h-5 accent-primary"
//         />
//       </div>

//       {/* Right: content (title + menu + subtitle) */}
//       <div className="flex-1 px-3">
//         <div className="flex justify-between items-center">
//           {/* Title (bold) */}
//           <span
//             className={`font-bold ${todo.completed ? "line-through text-gray-400" : "dark:text-white"}`}
//           >
//             {todo.text}
//           </span>

//           {/* Menu */}
//           <div className="relative" ref={menuRef}>
//             <button
//               onClick={(e) => {
//                 e.stopPropagation();
//                 setMenuOpen((p) => !p);
//               }}
//               className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700"
//               aria-label="Open actions"
//             >
//               <MoreVertical className="w-5 h-5 text-gray-600 dark:text-gray-300" />
//             </button>

//             {menuOpen && (
//               <ul className="absolute right-0 mt-2 w-44 bg-white dark:bg-gray-800 shadow-lg rounded-md text-sm z-50">
//                 <li>
//                   <button
//                     onClick={() => {
//                       handleView();
//                       setMenuOpen(false);
//                     }}
//                     className="w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
//                   >
//                     View
//                   </button>
//                 </li>
//                 <li>
//                   <button
//                     onClick={() => {
//                       handleEdit();
//                       setMenuOpen(false);
//                     }}
//                     className="w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
//                   >
//                     Edit
//                   </button>
//                 </li>
//                 <li>
//                   <button
//                     onClick={() => {
//                       handleDelete();
//                       setMenuOpen(false);
//                     }}
//                     className="w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 text-red-500"
//                   >
//                     Delete
//                   </button>
//                 </li>
//               </ul>
//             )}
//           </div>
//         </div>

//         {/* Subtitle below title */}
//         {todo.subtitle && (
//           <div className="mt-1">
//             <span className="text-sm text-gray-500 dark:text-gray-400">{todo.subtitle}</span>
//           </div>
//         )}
//       </div>

//       {/* Right-most: 3D progress bar */}
//       <div className="px-4">
//         <ProgressBar3D progress={progress} />
//       </div>
//     </div>
//   );
// }

// // small helper to escape values inserted into the SweetAlert html
// function escapeHtml(unsafe: string) {
//   return unsafe
//     .replaceAll("&", "&amp;")
//     .replaceAll("<", "&lt;")
//     .replaceAll(">", "&gt;")
//     .replaceAll('"', "&quot;")
//     .replaceAll("'", "&#039;");
// }




"use client";

import React, { useEffect, useRef, useState } from "react";
import { useAppDispatch } from "../store/store";
import { toggleTodo, deleteTodo, editTodo, Todo } from "../store/todoSlice";
import Swal from "sweetalert2";
import { MoreVertical } from "lucide-react";
import ProgressBar3D from "./ProgressBar3D";
import DateO from "./DateO"; 

interface Props {
  todo: Todo;
  progress: number; 
}

export default function TodoItem({ todo, progress }: Props) {
  const dispatch = useAppDispatch();
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);

  // Close menu when clicking outside
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
    <div className="border-b py-4 dark:border-gray-700 space-y-2">
      {/* Div 1: Title + Menu */}
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => dispatch(toggleTodo(todo.id))}
            className="w-5 h-5 accent-primary"
          />
          <span
            className={`font-bold ${
              todo.completed ? "line-through text-gray-400" : "dark:text-white"
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
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700"
          >
            <MoreVertical className="w-5 h-5 text-gray-600 dark:text-gray-300" />
          </button>

          {menuOpen && (
            <ul className="absolute right-0 mt-2 w-40 bg-white dark:bg-gray-800 shadow-lg rounded-md text-sm">
              <li>
                <button
                  onClick={handleView}
                  className="w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  View
                </button>
              </li>
              <li>
                <button
                  onClick={handleEdit}
                  className="w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  Edit
                </button>
              </li>
              <li>
                <button
                  onClick={handleDelete}
                  className="w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 text-red-500"
                >
                  Delete
                </button>
              </li>
            </ul>
          )}
        </div>
      </div>

      {/* Div 2: Subtitle */}
      {todo.subtitle && (
        <div>
          <span className="text-sm text-gray-500 dark:text-gray-400">{todo.subtitle}</span>
        </div>
      )}

      {/* Div 3: Progress bar */}
      <div className="flex justify-between items-center">
      <ProgressBar3D completed={todo.completed} />
      </div>

      {/* Div 4: Date */}
      <div>
        <DateO />
      </div>
    </div>
  );
}
