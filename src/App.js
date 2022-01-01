import React from 'react';
import './style.css';
import HeaderTodo from './header/todoheader';
import TodoListHolder from './todo_list/todoListHolder';
export default function App() {
  return (
    <div>
      <HeaderTodo />
      <TodoListHolder />
    </div>
  );
}
