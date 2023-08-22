import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  { name: 'Buy groceries', completed: false },
  { name: 'Finish assignment', completed: true },
];

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const newTodo = {
        name: action.payload,
        completed: false,
      };
      state.push(newTodo);
    },
    deleteTodo: (state, action) => {
      if (action.payload !== -1) {
        state.splice(action.payload, 1);
      }
    },
    toggleTodo: (state, action) => {
      const index = action.payload
      if (index !== -1) {
        state[index].completed = !state[index].completed;
      }
    },
  },
});

export const { addTodo, deleteTodo, toggleTodo } = todoSlice.actions;
export default todoSlice.reducer;
