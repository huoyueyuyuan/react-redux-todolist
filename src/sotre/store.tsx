import { configureStore } from '@reduxjs/toolkit';
import completedAtMiddleware from '../middleware/completedAtMiddleware'; // Import your custom middleware
import todoReducer from '../redux/TodoSlice';

const customMiddleware = (store) => (next) => (action) => {
  // Your custom middleware logic here
  return next(action);
};

const store = configureStore({
  reducer: {
    todos: todoReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(customMiddleware, completedAtMiddleware),
});

export default store;
