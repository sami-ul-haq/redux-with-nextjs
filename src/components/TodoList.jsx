"use client";

import { deleteTodo } from "@/app/redux/features/todoSlice";
import { useDispatch, useSelector } from "react-redux";

const TodoList = () => {
  const { todos } = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  console.log(todos);
  return (
    <div className="border rounded-md px-2 py-5 mt-10">
      {todos.length ? (
        todos?.map((item) => (
          <div key={item.id} className="flex items-center justify-between border rounded-md p-2 mb-3 hover:bg-white cursor-pointer" >
            <h2 className="text-green-700 font-semibold">{item.text}</h2>
            <span
              onClick={() => dispatch(deleteTodo(item.id))}
              className="border rounded-[50%] text-red-600 border-red-600 w-[20px] h-[20px] flex justify-center items-center cursor-pointer hover:bg-red-600 hover:text-white"
            >
              X
            </span>
          </div>
        ))
      ) : (
        <h1 className="text-red-600">Kindly Add Todos</h1>
      )}
    </div>
  );
};

export default TodoList;
