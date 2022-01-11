import React from 'react';
import './todoheader.css';
// newElementHandler = (e) => {
//   return '';
// };

const HeaderTodo = () => {
  const titleChangeHandler = (event) => {
    console.log(event.target.value);
  };
  return (
    // <form id="myDIV" className="header" onClick={newElementHandler}>
    <form id="myDIV" className="header">
      <h2>My To Do List</h2>
      <input
        type="text"
        id="myInput"
        placeholder="Title..."
        onChange={titleChangeHandler}
      />
      <button type="submit" className="addBtn">
        Add
      </button>
    </form>
  );
};
export default HeaderTodo;
