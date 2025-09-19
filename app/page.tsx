import Header from "./components/Header";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-lightBg dark:bg-darkBg">
      <Header />
      <section className="max-w-xl mx-auto mt-6 px-3 shadow rounded-lg bg-lightBg dark:bg-darkBg border-4 border-dashed border-gray-300">
        <TodoInput />
        <TodoList />
      </section>
    </main>
  );
}



