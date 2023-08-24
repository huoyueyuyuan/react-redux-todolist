import { createSlice } from '@reduxjs/toolkit';
import { TodoJob } from '../api/TodoJob';

const initialState = {
  todoList: [
    { name: 'Buy groceries', completed: false },
    { name: 'Finish assignment', completed: true },
  ],
  showSnow:false
}
  ;


const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const newTodo = {
        name: action.payload,
        completed: false,
      };
      state.todoList.push(newTodo);
    
    },
    deleteTodo: (state, action) => {
      if (action.payload !== -1) {
        state.todoList.splice(action.payload, 1);
      }
    },
    toggleTodo: (state, action) => {
      const index = action.payload
      if (index !== -1) {
        state.todoList[index].completed = !state.todoList[index].completed;
      }
    },
    sortTodosByCompleted: (state) => {
      state.todoList.sort((a, b) => (a.completed === b.completed ? 0 : a.completed ? 1 : -1));
    },
    
    showSnowflake:(state) =>{
      state.showSnow = true;
    },
    hiddenSnowflake:(state) =>{
      state.showSnow =false;
    }
  },
});

export const { addTodo, deleteTodo, toggleTodo,sortTodosByCompleted,showSnowflake,hiddenSnowflake } = todoSlice.actions;
export default todoSlice.reducer;


