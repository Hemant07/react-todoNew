import React, { useState } from 'react';
import './todoitems.css';
const Todolisttems = (props) => {
  const [title, setTitle] = useState(props.title);

  return <li>{title}</li>;
};
export default Todolisttems;
