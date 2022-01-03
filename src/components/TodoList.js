import React from "react";
import TodoListItem from "./TodoListItem";
import PropTypes from 'prop-types';

function TodoList({ todoList, removeTodo }) {
  return (
    <div>
      <ul>
        {todoList.map(records => (
          <TodoListItem
            key={records.id}
            todo={records.fields.Title}
            onRemoveTodo={removeTodo}
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