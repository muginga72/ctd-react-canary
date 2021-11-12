import React from 'react'

function TodoListItem({ todo }) {
  const {title} = todo;
  console.log(todo)
  return (
    <li>
      <span>{title}</span>
    </li>
  );
}

export default TodoListItem;