import React, { useState } from 'react';
// import { sortBy } from 'lodash';
import InputWithLabel from './InputWithLabel'
import styles from './AddTodoForm.module.css'
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCalendarTimes,
  faSortAmountDown,
  faSortAmountUp,
} from '@fortawesome/free-solid-svg-icons';

const AIRTABLEAPI = process.env.REACT_APP_AIRTABLE_API_KEY;
const AIRTABLEBASEID = process.env.REACT_APP_AIRTABLE_BASE_ID;
const AIRTABLETABLENAME = "Default";
const url = `https://api.airtable.com/v0/${AIRTABLEBASEID}/${AIRTABLETABLENAME}` 

const AddTodoForm = ({ onAddTodo }) => {
  const [todoTitle, setTodoTitle] = useState('');
    
  const handleTitleChange = ({target}) => {
    const { value } = target;
    setTodoTitle(value);
  } 

  const handleAddTodo = (e) => {
    e.preventDefault();
    onAddTodo({ id: Date.now(), fields: { Title: todoTitle } });
    setTodoTitle('');

    fetch(`${url}`,
      {
        method: "POST",
        body: JSON.stringify({ fields: { Title: todoTitle } }),
        headers: {
          "Authorization": `Bearer ${AIRTABLEAPI}`,
          "Content-Type": "application/json",
        }
      })
      .then((res) => res.json())
      .then((result) => {
      setTodoTitle(result.records)
        console.log(result);
      })
      .catch((err) => {
        console.error(err);
      }
    )
  }

  return (
    <div>
      <div className={styles.form}>
        <form onSubmit={handleAddTodo}
          className={styles.todo}
        >
          <InputWithLabel
            id="title" required
            type="text"
            todoTitle={todoTitle}
            isFocused
            handleTitleChange={handleTitleChange}
            handleAddTodo={handleAddTodo}
          >
            <strong>Title:</strong>
          </InputWithLabel>
        </form>
        <hr />
      </div>
      <div>
        <span>
          <button
            type="button"
            className={styles.sortTitle}
          // onClick={() => handleSort('TITLE')}
          >
              Title
          </button>
        </span>
        <span>
          <button
            type="button"
            className={styles.sortDownButton}
          // onClick={() => handleSort('UP')}
          >
            <FontAwesomeIcon icon={faSortAmountUp} className={styles.icon} />
              {/* UP */}
          </button>
        </span>
        <span>
          <button
            type="button"
            className={styles.sortUpButton}
            // onClick={() => handleSort('DOWN')}
          >
            <FontAwesomeIcon icon={faSortAmountDown} className={styles.icon} />
              {/* DOWN */}
          </button>
        </span>
        <span>
          <button
            type="button"
            className={styles.sortCreatedTime}
            // onClick={() => handleSort('CREATEDTIME')}
          >
            <FontAwesomeIcon icon={faCalendarTimes} className={styles.icon} />
              {/* Created Time */}
          </button>
        </span>
        <span>
          <button className={styles.actions}>
            <strong>Actions</strong>
          </button>
        </span>
      </div>
    </div>
  );
}
AddTodoForm.propTypes = {
  onAddTodo: PropTypes.func,
};

export default AddTodoForm;