import Header from "./components/Header";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-lightBg dark:bg-darkBg">
      <Header />
      <section className="max-w-xl mx-auto mt-6 bg-white dark:bg-gray-900 shadow rounded-lg">
        <TodoInput />
        <TodoList />
      </section>
    </main>
  );
}
