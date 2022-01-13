import React from 'react';
import './style.css';
import HeaderTodo from './header/todoheader';
import TodoListHolder from './todo_list/todoListHolder';
export default function App() {
  const onSaveHandler = (enteredDataHandler) => {
    const todoListData = {
      ...enteredDataHandler,
      id: Math.random().toString(),
    };
  };
  return (
    <div>
      <HeaderTodo onSaveTodoData={onSaveHandler} />
      <TodoListHolder />
    </div>
  );
}
