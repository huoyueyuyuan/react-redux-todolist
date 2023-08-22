// App.tsx
import React, { useState } from 'react';
import { Todo } from './types'; // 假设你之前定义了 Todo 类型
import AddTodoForm from './components/AddTodo';
import ShowTodoList from './components/ShowTodoList';

function App() {
  const initialTodos: Todo[] = [
    { name: 'Buy groceries', completed: false },
    { name: 'Finish assignment', completed: true },
    // ... 添加更多待办事项
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
    <div>
      <h1 className='text-success'>Todo App</h1>
      <AddTodoForm onAddTodo={handleAddTodo} />
      <ShowTodoList todos={todos} onDeleteTodo={handleDeleteTodo} onToggleTodo={handleToggleTodo} />
    </div>
  );
}

export default App;
