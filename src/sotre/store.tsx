import { configureStore } from '@reduxjs/toolkit';
import todoMiddleware from '../middleware/TodoMiddleware'; 
import todoReducer from '../redux/TodoSlice';



const store = configureStore({
  reducer: {
    todos: todoReducer,
  },  
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(todoMiddleware),  
});

export default store;
