import React from 'react';
import './style.css';
import HeaderTodo from './header/todoheader';
import TodoList from './todo_list/todo_list';
export default function App() {
  return (
    <div>
      <HeaderTodo />
      <TodoList />
    </div>
  );
}
