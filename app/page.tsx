import Header from "./components/Header";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-lightBg dark:bg-darkBg border-5 border-dashed border-gray-400">
      <Header />
      <section className="max-w-xl mx-auto mt-6  shadow rounded-lg bg-lightBg dark:bg-darkBg">
        <TodoInput />
        <TodoList />
      </section>
    </main>
  );
}



