import React from 'react';
import './todoListHolder.css';
import Todolisttems from './todoitems';
const TodoListHolder = (props) => {
  return (
    <ul id="myUL">
      <li>{props.todoName}</li>
    </ul>
  );
};
export default TodoListHolder;
