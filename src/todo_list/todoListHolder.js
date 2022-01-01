import React from 'react';
import './todoListHolder.css';
import Todolisttems from './todoitems';
const TodoListHolder = () => {
  return (
    <ul id="myUL">
      <Todolisttems />
      <Todolisttems />
      <Todolisttems />
      <Todolisttems />
      {/* <li>Hit the gym</li>
      <li className="checked">Pay bills</li>
      <li>Meet George</li>
      <li>Buy eggs</li>
      <li>Read a book</li>
      <li>Organize office</li> */}
    </ul>
  );
};
export default TodoListHolder;
