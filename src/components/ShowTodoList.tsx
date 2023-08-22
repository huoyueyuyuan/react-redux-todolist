import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';
import { deleteTodo, toggleTodo } from '../redux/TodoSlice'; 
import { TodoJob } from '../api/TodoJob';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


export const ShowTodoListComponent = () => {
  
  const toDoList:TodoJob[] = useSelector((state:any) => state.todos);
  const dispatch = useDispatch();

  const handleDeleteTodo = (id:number) => {
    dispatch(deleteTodo(id));
  };

  const handleToggleTodo = (id:number) => {
    dispatch(toggleTodo(id));
  };

  return (
    <section>
      <Row as="ul" 
        className="list-unstyled justify-content-center"
        xs={1}>
        {
          toDoList.map(({name,completed},item:number) => (
          <Col 
            as="li"
            className="d-flex justify-content-between my-3 bg-white w-75 "
            key={item}
            
          > 
            <span
              role='button'
              className={completed? 'text-danger text-decoration-line-through' : 'text-info'}
              tabIndex={0}
              onClick={() => handleToggleTodo(item)}
              onKeyDown={(event)=>(event)}
              >
              <FontAwesomeIcon icon={faCheck} className="mr-2" />
              {`${name} : ${item} : ${completed}`}
            </span>
            <FontAwesomeIcon
              className="me-4" 
              icon={faTimes} 
              onClick={() => handleDeleteTodo(item)}/>
          </Col>
        ))}
      </Row>
    </section>
  );
};
