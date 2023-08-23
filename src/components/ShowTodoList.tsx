import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBan, faCheck, faTimes, faTimesCircle, faWindowClose } from '@fortawesome/free-solid-svg-icons';
import { deleteTodo, sortTodosByCompleted, toggleTodo } from '../redux/TodoSlice'; 
import { TodoJob } from '../api/TodoJob';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CloseButton from 'react-bootstrap/CloseButton';

import '../App.css'; // 导入 index.css 文件

export const ShowTodoListComponent = () => {
  
  const toDoList:TodoJob[] = useSelector((state:any) => state.todos);
  const dispatch = useDispatch();

  const handleDeleteTodo = (id:number) => {
    dispatch(deleteTodo(id));
  };

  const handleToggleTodo = (id:number) => {
    dispatch(toggleTodo(id));
    dispatch(sortTodosByCompleted());
  };

  return (
    <section>
      <div className='w-100'>
      <Row as="ul" 
        className="list-unstyled justify-content-center mx-0"
        xs={1}>
        {toDoList.map(({name,completed},item:number) => (
          <Col 
            as="li"
            className="d-flex justify-content-between my-2 bg-white  border rounded line_height"
            key={item}
          > 
            <span
              role='button'
              className={`${completed? 'text-danger text-decoration-line-through' : 'text-info'} `}
              tabIndex={0}
              onClick={() => handleToggleTodo(item)}
              onKeyDown={(event)=>(event)}
            >
              <FontAwesomeIcon icon={faCheck} className="mr-2" />
              {name}
            </span>
            <CloseButton 
              className='d-flex align-items-center'
              onClick={() => handleDeleteTodo(item)}
              />
            
          </Col>
        ))}
      </Row>
      </div>
      
    </section>
  );
};