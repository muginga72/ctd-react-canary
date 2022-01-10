import React from "react";
import TodoListItem from "./TodoListItem";
import PropTypes from 'prop-types';

function TodoList({ todoList, removeTodo, submitEditedTodo }) {
  return (
    <div>
      <ul>
        {todoList.map(record => (
          <TodoListItem
            key={record.id}
            id={record.id}
            todo={record.fields.Title}
            submitEditedTodo={submitEditedTodo}
            onRemoveTodo={(id) => removeTodo(id)}
          />
        ))}
      </ul>
    </div>
  );
  
}

TodoList.propTypes = {
  todoList: PropTypes.array,
  removeTodo: PropTypes.func
};

export default TodoList;