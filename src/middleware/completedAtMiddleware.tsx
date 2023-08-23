const completedAtMiddleware = (store) => (next) => (action) => {
  if (action.type === 'todos/toggleTodo') {
    console.log(action);
    const index = action.payload;
    const state = store.getState();
    const todo = state.todos[index];
    console.log(todo);
    if (!todo.completed) {
      const timestamp = new Date().toISOString();
      console.log(`Task "${todo.name}" completed at ${timestamp}`);
    }
  }

  return next(action);
};

export default completedAtMiddleware;
