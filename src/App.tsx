import React, { useState } from 'react';
import { Todo } from './api/Todo';
import { AddTodoComponeent } from './components/AddTodo';
import { ShowTodoListComponent } from './components/ShowTodoList';


function App() {
  const initialTodos: Todo[] = [
    { name: 'Buy groceries', completed: false },
    { name: 'Finish assignment', completed: true },
  ];

  const [todos, setTodos] = useState<Todo[]>(initialTodos);

  const handleDeleteTodo = (index: number) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  const handleAddTodo = (newTodo: Todo) => {
    setTodos(prevTodos => [...prevTodos, newTodo]);
  };

  const handleToggleTodo = (index: number) => {
    const newTodos = todos.map((todo, i) =>
      i === index ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(newTodos);
  };

  return (
    <div className="container mt-4">
      <h1 className="mb-4">Todo App</h1>
      <ShowTodoListComponent todos={todos} onDeleteTodo={handleDeleteTodo} onToggleTodo={handleToggleTodo} />
      <AddTodoComponeent onAddTodo={handleAddTodo} />
    </div>
  );
}

export default App;
