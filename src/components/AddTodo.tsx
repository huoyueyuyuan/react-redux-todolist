// AddTodoForm.tsx
import React, { useState } from 'react';
import { addTodo } from '../TodoSlice'; // 导入 todoSlice
import { useDispatch } from 'react-redux';



const AddTodoForm: React.FC = () => {
  
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
        placeholder="Add a new todo" // 添加提示语
        value={name}
        onChange={handleInputChange}
      />
      <button type="submit">Add Todo</button>
    </form>
  );
};

export default AddTodoForm;
function dispatch(arg0: { payload: any; type: "todos/addTodo"; }) {
  throw new Error('Function not implemented.');
}

