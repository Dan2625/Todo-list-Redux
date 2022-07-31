import React from 'react';
import TodoInput from './todoInput';
import TodoList from './todoList';

function AppTodo() {
  return (
    <div className="container">
      <h1 className="display-4">App Todo list</h1>
      <TodoInput />
      <TodoList />
    </div>
  );
}

export default AppTodo;
