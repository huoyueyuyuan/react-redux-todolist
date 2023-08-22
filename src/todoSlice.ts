// todoSlice.js (or todoSlice.ts for TypeScript)
import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  { id: 1, name: 'Buy groceries', completed: false },
  { id: 2, name: 'Finish assignment', completed: true },
  // ... 添加更多待办事项
];

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const newTodo = {
        id: state.length + 1,
        name: action.payload.name,
        completed: false,
      };
      state.push(newTodo);
    },
    deleteTodo: (state, action) => {
      const index = state.findIndex(todo => todo.id === action.payload);
      if (index !== -1) {
        state.splice(index, 1);
      }
    },
    toggleTodo: (state, action) => {
      const index = state.findIndex(todo => todo.id === action.payload);
      if (index !== -1) {
        state[index].completed = !state[index].completed;
      }
    },
  },
});

export const { addTodo, deleteTodo, toggleTodo } = todoSlice.actions;
export default todoSlice.reducer;
