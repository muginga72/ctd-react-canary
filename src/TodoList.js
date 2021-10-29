import React from "react";
import TodoListItem from "./component/TodoListItem";

function TodoList(props) {
  return (
    <div>
      <div>
        {props.items.map(function (todo) {
          return <TodoListItem key={todo.id} todo={todo} />;
        })}
      </div>
    </div>
  );
}

export default TodoList;
