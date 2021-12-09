import React from "react";
import TodoListItem from "./component/TodoListItem";

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

export default TodoList;