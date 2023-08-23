import React from 'react';
import Container from 'react-bootstrap/Container';
import { AddTodoComponeent } from './components/AddTodo';
import { ShowTodoListComponent } from './components/ShowTodoList';

import './App.css'; // 导入您的样式文件



function App() {

  return (
    <Container as="main" className="bg-secondary w-75">
      <h2 className="pt-4">Todo Demo</h2>
      <ShowTodoListComponent />
      <AddTodoComponeent />
      <div className="empty-space"></div>
    </Container>
  );
}

export default App;
