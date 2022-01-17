import React from 'react';
import './todoListHolder.css';
import Todolisttems from './todoitems';
console.log(props.todoNames);
const TodoListHolder = (props) => {
  return (
    <ul id="myUL">
      {props.todoNames.map((item) => (
        <Todolisttems value={item} />
      ))}
    </ul>
  );
};
export default TodoListHolder;
