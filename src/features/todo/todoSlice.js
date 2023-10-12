import { createSlice, nanoid } from "@reduxjs/toolkit";
// nonoid gives you unique ids
/* createSlice is just a piece of your all code that takes care of your states
and their changes*/

const initialState = {
  todos: [{ id: 1, text: "initial state" }],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        text: action.payload, // payload is also called 'data';
      };

      state.todos.push(todo); // automatically adds todo in todos list
      // All of the things are handled by Redux toolkit. I don't have
      // to worry about the state changes while in simple Redux, I should
    },

    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },

    editTodo: (state, action) => {
      const { id, newText } = action.payload;
      console.log(
        "Id & newText comes from action in editTodo reducer are : \n",
        id,
        " ",
        newText
      );

      // Find the index of the todo to edit
      const todoIndex = state.todos.findIndex((todo) => todo.id === id);
      console.log("Index --> ", todoIndex);

      if (todoIndex !== -1) {
        // Update the text of the todo at the found index
        state.todos[todoIndex].text = newText;
      }
    },
  },
});

export const { addTodo, removeTodo, editTodo } = todoSlice.actions; // these are the methods only

export default todoSlice.reducer; // This will be called in store(the entire reducer)
