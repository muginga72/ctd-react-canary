import React from "react";
import TodoListItem from "./component/TodoListItem";

const todoList = [
  {
    id: "0",
    title: "Complete assignment Lesson 1-3",
  },
  {
    id: "1",
    title: "Upload it to GitHub",
  },
  {
    id: "2",
    title: "Submit the assignment on Squibby",
  },
];

function TodoList(props) {
  return (
    <div>
      <ul>
        {todoList.map(item => (
          <TodoListItem key={item.id} todo={item} />
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
