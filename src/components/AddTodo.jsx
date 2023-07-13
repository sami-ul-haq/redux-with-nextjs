"use client";

import { addTodo } from "@/app/redux/features/todoSlice";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";

const AddTodo = () => {
  const [todo, setTodo] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!todo || todo == "") return;
    dispatch(
      addTodo({
        text: todo,
        id: uuidv4(),
      })
    );
    setTodo("");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-3 text-center">
      <input
        type="text"
        placeholder="Add todo..."
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        className="text-white border rounded-md px-4 py-3 w-full bg-transparent focus:outline-none"
      />
      <button type="submit" className="border rounded-md px-4 py-2 hover:bg-white  hover:text-black">Add Todo</button>
    </form>
  );
};

export default AddTodo;
