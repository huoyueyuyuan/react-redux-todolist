import { createSlice } from '@reduxjs/toolkit';
import { TodoJob } from '../api/TodoJob';

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
    sortTodosByCompleted: (state) => {
      state.sort((a, b) => (a.completed === b.completed ? 0 : a.completed ? 1 : -1));
    }
    
  },
});

export const { addTodo, deleteTodo, toggleTodo,sortTodosByCompleted } = todoSlice.actions;
export default todoSlice.reducer;


function sortState(state:TodoJob[]) {
  const sortedTodos = [...state].sort((a, b) => (a.completed === b.completed ? 0 : a.completed ? 1 : -1));
  state = [...sortedTodos];
}

