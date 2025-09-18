"use client";

import ThemeToggle from "./ThemeToggle";

export default function Header() {
  return (
    <header className="flex justify-between items-center p-4 bg-primary text-white dark:bg-darkBg">
      <h1 className="text-xl font-bold">To-Do List</h1>
      <ThemeToggle />
    </header>
  );
}
