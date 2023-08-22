import React from 'react';
import Container from 'react-bootstrap/Container';
import { AddTodoComponeent } from './components/AddTodo';
import { ShowTodoListComponent } from './components/ShowTodoList';


function App() {

  return (
    <Container as="main" className="bg-secondary">
      <h2 className="pt-4">Todo Demo</h2>
      <ShowTodoListComponent />
      <AddTodoComponeent />
    </Container>
  );
}

export default App;
