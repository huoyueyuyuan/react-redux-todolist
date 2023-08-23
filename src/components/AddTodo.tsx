import React, { useState } from 'react';
import { addTodo, sortTodosByCompleted } from '../redux/TodoSlice'; 
import { useDispatch } from 'react-redux';
import '../App.css'; // 导入 index.css 文件
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';


export const AddTodoComponeent = () => {
  
  const dispatch = useDispatch();
  const [name, setName] = useState<string>('');


  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setName(value);
    console.log(name);
  };

  const handleAddTodo = (event: React.FormEvent) => {
    event.preventDefault();
    if (name.trim()) {
      dispatch(addTodo(name));
      dispatch(sortTodosByCompleted());
      setName("");
    }
  };

  return (
    <section id="addTodo">

      <InputGroup className="mb-3">
        
        <Form.Control
          className="line_height"
          placeholder="Add a new todo..."
          aria-label="jobName"
          aria-describedby="jobName"
          type="text"  value={name}
          onChange={handleInputChange}
        />
        <button className="shadow-none" type="submit" onClick={handleAddTodo}>Add</button>
      </InputGroup>
    </section>
    
  );
};