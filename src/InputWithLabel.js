import React, { useEffect, useRef } from 'react';
import styles from './InputWithLabel.module.css'

const InputWithLabel = ({
  id,
  name,
  handleTitleChange,
  children,
  todoTitle,
}) => {
  // Create persistent object value that doesn't change
  const inputRef = useRef();

  // Perform the focus on the input field
  useEffect(() => {
    if (todoTitle === []) {

    // Will give access to attribute when is passed
      inputRef.current.focus();
    }
  }, [todoTitle]);

  return (
    <>
      <label 
        htmlFor={id} className={styles.label}>
        <strong>{children}</strong>
      </label>
      &nbsp;
      <input
        id={id}
        type="text"
        name={name}
        // Will assign the instance element to changeable current property
        ref={inputRef}
        placeholder="Add new to do"
        value={todoTitle}
        onChange={handleTitleChange}
        className={styles.input}
      />
      <button className={styles.buttonSubmit} style={{ color: "blue" }}>Add</button>
    </>
  );
}

export default InputWithLabel;
