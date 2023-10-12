import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useDispatch } from "react-redux";
import { removeTodo, editTodo } from "../features/todo/todoSlice";

const Todos = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const [editText, setEditText] = useState("");
  const [editingId, setEditingId] = useState(null);

  const handleEdit = (id) => {
    const todoToEdit = todos.find((todo) => todo.id === id);
      // Log the previous value of todoToEdit.text
      console.log("Previous todo text =", todoToEdit.text);
  
      // Set the state
      setEditText(todoToEdit.text);
      setEditingId(id);
  };
  

  const handleSaveEdit = (id) => {
      console.log("edit text =", editText);
    let newText = editText;
    console.log("Id in saveEdit function = ", id);
    console.log("newText in saveEdit function = ",newText);
    dispatch(editTodo({ id, newText}));
   setEditText("");
    setEditingId(null);
  };
  return (
    <>
      <div className="border-2 border-white rounded w-100 mt-5 h-auto flex justify-center items-center">
        <h1 className="px-3 py-2 text-white text-lg bg-black font-serif font-bold text-center">
          Todos List
        </h1>
      </div>
      {todos.map((todo) => {
        return (
         
            <li
              className="mt-4 flex justify-between items-center
                bg bg-zinc-800 px-4 py-2 rounded"
                key={todo.id}
            >
              <div className="text-white">{todo.text}</div>
              {editingId == todo.id ? (
                <>
                  <input
                    type="text"
                    value={editText}
                    onChange={(e) => setEditText(e.target.value)}
                  />
                  <button
                    className="bg-blue-500 text-white border-0 py-1 px-4 focus:outline-none hover:bg-blue-800 rounded text-md cursor-pointer"
                    onClick={() => handleSaveEdit(editingId)}
                  >
                    Update
                  </button>
                </>
              ) : (
                <button
                  className="bg-green-500 text-white border-0 py-1 px-4 focus:outline-none hover:bg-red-800 rounded text-md cursor-pointer"
                  onClick={() => handleEdit(todo.id)}
                >
                  Edit Todo
                </button>
              )}
              {/* 

              <button
                className="bg-green-500 text-white border-0
                py-1 px-4 focus:outline-none hover:bg-red-800 rounded text-md cursor-pointer"
                onClick={() => dispatch(editTodo(todo.id))}
              >
                Edit Todo
              </button> */}
              <button
                className="bg-red-500 text-white border-0
                py-1 px-4 focus:outline-none hover:bg-red-800 rounded text-md cursor-pointer"
                onClick={() => dispatch(removeTodo(todo.id))}
              >
                Delete Todo
              </button>
            </li>
        );
      })}
    </>
  );
};

export default Todos;
