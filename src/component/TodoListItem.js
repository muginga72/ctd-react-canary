import React from 'react'

function TodoListItem({ todo, onRemoveTodo }) {
  return (
    <li>
      <span>{todo}</span>
      <button type="button" onClick={() => onRemoveTodo(todo.id)}> Remove</button>
    </li>
  );
}

export default TodoListItem;