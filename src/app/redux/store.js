import todoSlice from "./features/todoSlice";

const { configureStore } = require("@reduxjs/toolkit");


export const store = configureStore({
    reducer: {
        todos: todoSlice
    }
});