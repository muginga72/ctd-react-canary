import React, { useState } from 'react';
import InputWithLabel from './InputWithLabel'
import styles from './AddTodoForm.module.css'
import PropTypes from 'prop-types';

function AddTodoForm({ onAddTodo }) {
  
  const [todoTitle, setTodoTitle] = useState('')

  const handleTitleChange = ({target}) => {
    const { value } = target;
    setTodoTitle(value);
  } 

  const handleAddTodo = (e) => {
    e.preventDefault();
    onAddTodo({ id: Date.now(), fields: { Title: todoTitle }});
    setTodoTitle('');
  }

  return (
    <div className={styles.form}>
      <form onSubmit={handleAddTodo} className={styles.todo}>
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
      <hr/>
    </div>
  );

}
AddTodoForm.propTypes = {
  onAddTodo: PropTypes.func,
};

export default AddTodoForm;