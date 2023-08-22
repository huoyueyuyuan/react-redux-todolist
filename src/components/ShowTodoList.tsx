// ShowTodoList.tsx
import React, { useState } from 'react';
import { Todo } from '../types';

interface ShowTodoListProps {
  todos: Todo[];
  onDeleteTodo: (index: number) => void;
}

const ShowTodoList: React.FC<ShowTodoListProps> = ({ todos, onDeleteTodo }) => {
  return (
    <div>
      <h2>Todo List</h2>
      <ul>
        {todos.map((todo, index) => (
          <li key={index} className='d-flex justify-content-between'>
            {todo.name} - Completed: {todo.completed ? 'Yes' : 'No'}
            <button onClick={() => onDeleteTodo(index)} className='d-flex '>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ShowTodoList;
