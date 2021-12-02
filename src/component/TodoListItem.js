import React from 'react'

function TodoListItem({ todo, onRemoveTodo }) {
  const {title} = todo;
  return (
    <li>
      <span>{title}</span>
      <button type="button" onClick={() => onRemoveTodo(todo.id)}> Remove</button>
    </li>
  );
}

export default TodoListItem;