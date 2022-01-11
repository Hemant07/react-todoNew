import React, { useState } from 'react';
import './todoitems.css';
const Todolisttems = (props) => {
  const [title, setTitle] = useState(props.title);

  const submitHandler = () => {
    //return();
    setTitle('update');
    console.log('title');
  };
  return (
    <li>
      {title}
      <button type="submit" className="addBtn" onClick={submitHandler}>
        Add
      </button>
    </li>
  );
};
export default Todolisttems;
