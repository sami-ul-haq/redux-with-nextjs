import AddTodo from "@/components/AddTodo";
import TodoList from "@/components/TodoList";

export default function Home() {
  return (
    <div className="max-w-[500px] mx-auto px-2 py-10">
      <h1 className="text-2xl text-center font-bold mb-5">Todo List</h1>
      <AddTodo />
      <TodoList />
    </div>
  );
}
