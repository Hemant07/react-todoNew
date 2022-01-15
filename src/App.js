import React from 'react';
import './style.css';
import HeaderTodo from './header/todoheader';
import TodoListHolder from './todo_list/todoListHolder';
export default function App() {
  const todoItems = [
    { name: 'Hit the gym' },
    { name: 'Pay bills' },
    { name: 'Meet George' },
    { name: 'Buy eggs' },
    { name: 'Read a book' },
    { name: 'Organize office' },
  ];
  const onSaveHandler = (enteredDataHandler) => {
    const todoListData = {
      ...enteredDataHandler,
      id: Math.random().toString(),
    };
  };
  return (
    <div>
      <HeaderTodo onSaveTodoData={onSaveHandler} />
      <TodoListHolder todoTitle={todoItems.name} />
    </div>
  );
}
