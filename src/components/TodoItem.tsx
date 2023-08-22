// 使用类型的示例
import React from 'react';
import { Todo } from '../types';


function TodoItem({ todo }: { todo: Todo }) {
  return (
    <div>
      <p>Task: {todo.name}</p>
      <p>Completed: {todo.completed ? 'Yes' : 'No'}</p>
    </div>
  );
}

export default TodoItem;
