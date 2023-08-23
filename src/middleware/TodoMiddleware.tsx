const todoMiddleware = (store) => (next) => (action) => {
  if (action.type === 'todos/toggleTodo') {
    const index = action.payload;
    const state = store.getState();
    const todo = state.todos[index];
    if (!todo.completed) {
      const timestamp = new Date();
      console.log(`Task "${todo.name}" completed at ${timestamp}`);
    }
  }

  return next(action);
};

export default todoMiddleware;
