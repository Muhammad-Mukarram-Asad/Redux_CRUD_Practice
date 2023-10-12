import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlice";

export const AddTodo = () => {
  const [input, setInput] = useState("");
  
  const dispatch = useDispatch();

  const addTodoHandler = (e) => {
    e.preventDefault();

    dispatch(addTodo(input));
    setInput("");
  };




  return (
    <div>
      <form onSubmit={addTodoHandler} className="space-x-3 mt-12 ">
        <input
          className="border border-gray-700 
            rounded bg-gray-800 focus:border-indigo-500 focus:ring-2
            focus:ring-indigo-900 text-base outline-none text-gray-100
            py-1 px-3 leading-8 transition-colors duration-800 ease-in-out
            "
          value={input}
          placeholder="Enter Todo Here..."
          type="text"
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          type="submit"
          className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none 
           hover:bg-indigo-600 rounded text-lg cursor-pointer"
        >
          Add Todo
        </button>
      </form>
    </div>
  );
};
