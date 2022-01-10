import React, { useState } from 'react';
import styles from './TodoListItem.module.css';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSave,
  faTrash,
  faUserEdit,
  faWindowClose
} from '@fortawesome/free-solid-svg-icons';

const TodoListItem = (
  {
    todo,
    onRemoveTodo,
    id,
    name,
    submitEditedTodo,
  }) =>
{

  const [isEditing, setIsEditing] = useState(false);
  const [newTodo, setNewTodo] = useState('');

  function handleChange(e) {
    e.preventDefault();
    setNewTodo(e.target.value);
  }

  function handleChangeTwo(e) {
    e.preventDefault();
  }

  const editingTemplate = (
    <form onSubmit={(e) => handleChangeTwo({e, id, newTodo})}>
      <div>
        <label className={styles.renameTodo} htmlFor={id}>Rename your to do: {name}</label>
        <input
          id={id}
          type="text"
          value={newTodo}
          onChange={(id) => handleChange(id)}
        />
      </div>
      <div>
        <button
          type="button"
          className={styles.cancelButton}
          onClick={() => setIsEditing(false)}
        >
          <FontAwesomeIcon icon={faWindowClose} className={styles.icon} />
          {/* Cancel */}
        <span className="visually-hidden">{name}</span>
        </button>
        <button type="button"
          className={styles.saveButton}
          onClick={() => submitEditedTodo(id, newTodo)}
        >
          <FontAwesomeIcon icon={faSave} className={styles.icon} />
          {/* Save */}
          <span className="visually-hidden">{name}</span>
        </button>
      </div>
    </form>
  );
  
  const viewTemplate = (
    <div>
      <label className="todo-label" htmlFor={id}>
        {name}
      </label>
    </div>  
  );
  
  return (
    <>
      <li className={styles.editItem}>
        {isEditing ? editingTemplate : viewTemplate}
      </li>
      <li className={styles.ListItem}>
        <span>{todo}</span>
        <div className={styles.buttonGroup}>
          <button type="button" className={styles.buttonEdit}
            onClick={() => setIsEditing(true)}>
          <FontAwesomeIcon icon={faUserEdit} className={styles.icon} />
            {/* Edit */}
            <span>{name}</span>
          </button>
          <button
            type="button"
            className={styles.buttonRemove}
              onClick={() => onRemoveTodo(id)}> 
            <FontAwesomeIcon icon={faTrash} className={styles.icon} />
              {/* Remove */}
          </button>
        </div>
      </li>
    </>
  );
  
}

TodoListItem.propTypes = {
  todo: PropTypes.string,
  onRemoveTodo: PropTypes.func
};

export default TodoListItem;