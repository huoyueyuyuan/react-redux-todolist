// ShowTodoList.js (or ShowTodoList.tsx for TypeScript)
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';
import { deleteTodo, toggleTodo } from '../TodoSlice'; // 导入 todoSlice

const ShowTodoList = () => {
  const todos = useSelector(state => state.todos);
  const dispatch = useDispatch();

  const handleDeleteTodo = (id) => {
    dispatch(deleteTodo(id));
  };

  const handleToggleTodo = (id) => {
    dispatch(toggleTodo(id));
  };

  return (
    <div>
      <h2>Todo List</h2>
      <ul>
        {todos.map((todo) => (
          <li
            key={todo.id}
            className={todo.completed ? 'text-success' : 'text-muted'}
            onClick={() => handleToggleTodo(todo.id)}
          >
            <FontAwesomeIcon icon={faCheck} className="mr-2" />
            {todo.name}
            <button className="btn btn-link" onClick={() => handleDeleteTodo(todo.id)}>
              <FontAwesomeIcon icon={faTimes} />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ShowTodoList;
