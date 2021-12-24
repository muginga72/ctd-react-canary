import React from 'react'
import styles from './TodoListItem.module.css'

function TodoListItem({ todo, onRemoveTodo }) {
  return (
    <li className={styles.ListItem}>
      <span>{todo}</span>
      <button
        type="button"
        className={styles.buttonRemove}
        onClick={() => onRemoveTodo(todo.id)}>
        Remove
      </button>
    </li>
  );
}

export default TodoListItem;