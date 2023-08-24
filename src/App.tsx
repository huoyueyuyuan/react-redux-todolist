import React from 'react';
import Container from 'react-bootstrap/Container';
import { AddTodoComponeent } from './components/AddTodo';
import { ShowTodoListComponent } from './components/ShowTodoList';
import { SnowComponeent } from './components/Snow';

function App() {

  return (
    <Container as="main" className="bg-secondary container">
      <div className="h-75 d-flex flex-column ">
        <h3 className="pt-4 text-light ps-1">Demo</h3>
          <SnowComponeent />
          <ShowTodoListComponent />
          <AddTodoComponeent />
          <div className="empty-space"></div>
      </div>
    </Container>
  );
}

export default App;
