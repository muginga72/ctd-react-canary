import React from "react";
import TodoListItem from "./component/TodoListItem";

function TodoList({ todoList, removeTodo }) {
  return (
    <div>
      <ul>
        {todoList.map(item => (
          <TodoListItem
            key={item.id}
            todo={item}
            onRemoveTodo={removeTodo}
          />
        ))}
      </ul>
    </div>
  );
}

export default TodoList;