import React from 'react';
import './todoListHolder.css';
import Todolisttems from './todoitems';
const TodoListHolder = (props) => {
  return (
    <ul id="myUL">
      <Todolisttems {props.todoItems[0].name} />
      <Todolisttems title={todoItems[1].name} />
      <Todolisttems title={todoItems[2].name} />
      <Todolisttems title={todoItems[3].name} />
    </ul>
  );
};
export default TodoListHolder;
