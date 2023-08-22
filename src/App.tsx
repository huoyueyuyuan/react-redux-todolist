// 在另一个组件中使用的示例
import React from 'react';
import TodoItem from './components/TodoItem';
import { Todo } from './types';

function App() {
  const todo: Todo = {
    name: 'Buy groceries',
    completed: false,
  };

  return (
    <div>
      <h1>Todo List</h1>
      <TodoItem todo={todo} />
    </div>
  );
}

export default App;
