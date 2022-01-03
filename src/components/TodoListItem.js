import React from 'react'
import styles from './TodoListItem.module.css'
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTrash } from '@fortawesome/free-solid-svg-icons';

function TodoListItem({ todo, onRemoveTodo }) {
  return (
    <>
      <li className={styles.ListItem}>
        <span>{todo}</span>
        <button
          type="button"
          className={styles.buttonRemove}
            onClick={() => onRemoveTodo(todo.id)}> 
          <FontAwesomeIcon icon={faTrash} className={styles.icon} />
          {/* Remove */}
        </button>
      </li>
    </>
  );
  
}

TodoListItem.propTypes = {
  todo: PropTypes.string,
  onRemoveTodo: PropTypes.func
};

export default TodoListItem;