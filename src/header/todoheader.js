import React from 'react';
import './todoheader.css';
// newElementHandler = (e) => {
//   return '';
// };

const HeaderTodo = () => {
  return (
    // <form id="myDIV" className="header" onClick={newElementHandler}>
    <form id="myDIV" className="header">
      <h2 style={{ margin: '5px' }}>My To Do List</h2>
      <input type="text" id="myInput" placeholder="Title..." />
      <button type="submit" className="addBtn">
        Add
      </button>
    </form>
  );
};
export default HeaderTodo;
