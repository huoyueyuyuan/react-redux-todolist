// AddTodoForm.tsx
import React, { useState } from 'react';
import { Todo } from '../types';

interface AddTodoFormProps {
  onAddTodo: (todo: Todo) => void;
}

const AddTodoForm: React.FC<AddTodoFormProps> = ({ onAddTodo }) => {
  const [newTodo, setNewTodo] = useState<Todo>({ name: '', completed: false });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setNewTodo(prevTodo => ({ ...prevTodo, [name]: value }));
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (newTodo.name.trim()) {
      onAddTodo(newTodo);
      setNewTodo({ name: '', completed: false });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Add a new todo" // 添加提示语
        value={newTodo.name}
        onChange={handleInputChange}
      />
      <button type="submit">Add Todo</button>
    </form>
  );
};

export default AddTodoForm;
