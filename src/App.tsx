import React from 'react';
import './App.scss';
import { TodoList } from './components/TodoList/TodoList';

function App() {
  const title1: string = 'What to learn -1';
  const title2: string = 'What to learn -2';

  return (
    <div className="app">
      <TodoList title={title1} />
      <TodoList title={title2} />
    </div>
  );
}

export default App;
