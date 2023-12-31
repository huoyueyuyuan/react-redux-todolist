import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, } from '@fortawesome/free-solid-svg-icons';
import { deleteTodo, hiddenSnowflake, showSnowflake, sortTodosByCompleted, toggleTodo } from '../redux/TodoSlice'; 
import { TodoJob } from '../api/TodoJob';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CloseButton from 'react-bootstrap/CloseButton';

import '../App.css';

export const ShowTodoListComponent = () => {
  
  const toDoList:TodoJob[] = useSelector((state:any) => state.todos.todoList);
  const dispatch = useDispatch();

  const handleDeleteTodo = (id:number) => {
    dispatch(showSnowflake())
    setTimeout(()=>{
      dispatch(deleteTodo(id));
      dispatch(sortTodosByCompleted());
      dispatch(hiddenSnowflake());
    },1000);
  };

  const handleToggleTodo = (id:number) => {
    dispatch(toggleTodo(id));
    dispatch(sortTodosByCompleted());
  };

  return (
    <section>
      <Row as="ul" 
        className="list-unstyled justify-content-center mx-0"
        xs={1}>
        {toDoList.map(({name,completed},item:number) => (
          <Col 
            as="li"
            className="d-flex justify-content-between align-items-center my-2 bg-white border rounded line_height"
            key={item}
          > 
            <span
              role='button'
              className={completed? 'text-danger text-decoration-line-through' : 'text-info'}
              tabIndex={item}
              onClick={() => handleToggleTodo(item)}
              onKeyDown={(event)=>(event)}
            >
              <FontAwesomeIcon icon={faCheck} className="mr-2" />
              {name}
            </span>
            <CloseButton 
              onClick={() => handleDeleteTodo(item)}
              />
          </Col>
        ))}
      </Row>
    </section>
  );
};