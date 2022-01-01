import React from 'react';
import './todoListHolder.css';
import Todolisttems from './todoitems';
const TodoListHolder = () => {
  const todoItems = [
    { name: 'Hit the gym' },
    { name: 'Pay bills' },
    { name: 'Meet George' },
    { name: 'Buy eggs' },
    { name: 'Read a book' },
    { name: 'Organize office' },
  ];
  return (
    <ul id="myUL">
      <Todolisttems title={todoItems[0].name} />
      <Todolisttems title={todoItems[1].name} />
      <Todolisttems title={todoItems[2].name} />
      <Todolisttems title={todoItems[3].name} />
    </ul>
  );
};
export default TodoListHolder;
