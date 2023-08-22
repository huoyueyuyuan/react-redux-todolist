import React, { FC, useState } from 'react';
import { addTodo } from '../redux/TodoSlice'; 
import { useDispatch } from 'react-redux';

export const AddTodoComponeent: FC = () => {
  
  const dispatch = useDispatch();
  const [name, setName] = useState<string>('');


  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setName(value);
  };

  const handleAddTodo = (event: React.FormEvent) => {
    event.preventDefault();
    if (name.trim()) {
      dispatch(addTodo(name));
      setName("")
    }
  };

  return (
    <form onSubmit={handleAddTodo}>
      <input
        type="text"
        name="name"
        placeholder="Add a new todo..." 
        value={name}
        onChange={handleInputChange}
      />
      <button type="submit">Add Todo</button>
    </form>
  );
};

export default addTodoComponeent;

