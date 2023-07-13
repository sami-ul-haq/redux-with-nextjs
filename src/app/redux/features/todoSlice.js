const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  todos: [
    // { id: 12, text: "Buy Milk" },
    // { id: 13, text: "Go to Jym" },
  ],
};

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todos = [...state.todos, action.payload];
    },
    deleteTodo: (state,action) => {
        state.todos = [...state.todos.filter(item=>item.id !== action.payload)];
    },
    toggleTodo: (state,action) => {
      console.log("Toggle")
    }
  },
});

export const { addTodo, deleteTodo, toggleTodo } = todoSlice.actions;
export default todoSlice.reducer;
