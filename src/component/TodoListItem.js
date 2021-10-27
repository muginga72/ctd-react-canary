import React from 'react'

function TodoListItem(props) {
  return (
    <li>
      <span>{props.listItem.title}</span>
    </li>
  );
}

export default TodoListItem;