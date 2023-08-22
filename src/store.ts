// store.js (or store.ts for TypeScript)
import { configureStore } from '@reduxjs/toolkit';
import todoReducer from './TodoSlice'; // 创建下面将要创建的 todoSlice

const store = configureStore({
  reducer: {
    todos: todoReducer,
  },
});

export default store;
