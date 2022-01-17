import React, { useState } from 'react';
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
  const [inputItem, setInputItem] = useState('Hello world ');
  const onSaveHandler = (event) => {
    //setInputItem(event.target.value);
    const todoListData = {
      ...enteredDataHandler,
      id: Math.random().toString(),
    };
  };
  return (
    <div>
      <HeaderTodo onSaveTodoData={onSaveHandler} />
      <div>
        <TodoListHolder todoNames={todoItems} />
      </div>
    </div>
  );
}
