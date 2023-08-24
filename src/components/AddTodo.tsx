import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

import { addTodo, showSnowflake, sortTodosByCompleted } from '../redux/TodoSlice'; 

import '../App.css';

export const AddTodoComponeent = () => {
  
  const dispatch = useDispatch();
  const [name, setName] = useState<string>('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setName(value);
  };

  const handleAddTodo = (event: React.FormEvent) => {
    event.preventDefault();
    dispatch(showSnowflake())
    if (name.trim()) {
      setTimeout(()=>{
        dispatch(addTodo(name));
        dispatch(sortTodosByCompleted());
        setName("");
      },1000);
    }
    
  };

  return (
    <section id="addTodo">
      <InputGroup className="mb-3 z-1">
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

