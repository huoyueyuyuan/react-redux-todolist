// ShowTodoList.tsx
import React, { useState } from 'react';
import { Todo } from '../types';
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


interface ShowTodoListProps {
  todos: Todo[];
  onDeleteTodo: (index: number) => void;
  onToggleTodo: (index: number) => void; 

}

const ShowTodoList: React.FC<ShowTodoListProps> = ({ todos, onDeleteTodo , onToggleTodo }) => {
  return (
    <div>
      <h2>Todo List</h2>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}             
          className={todo.completed ? 'text-success' : 'text-muted'} // 改变字体颜色

            onClick={() => onToggleTodo(index)} // 添加点击事件处理程序
          >
            <div>
              <FontAwesomeIcon icon={faCheck}/>{todo.name} - Completed: {todo.completed ? 'Yes' : 'No'}
            </div>
            <FontAwesomeIcon icon={faTimes} onClick={() => onDeleteTodo(index)} className='me-5'/>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ShowTodoList;
