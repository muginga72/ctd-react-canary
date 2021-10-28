import React from 'react';
import TodoListItem from './component/TodoListItem';

const todoList = [
  {
    id: '0',
    title: 'Complete assignment Lesson 1-3'
  },
  {
    id: '1',
    title: 'Upload it to GitHub'
  },
  {
    id: '2',
    title: 'Submit it to Squibby'
  },
];

function TodoList(props) {
  return (
    <div>
      <hr />
      {todoList.map(function (todo) {
        return (
          <TodoListItem key={ todo.id } todo={ todo }/>
        );
      })}
    </div>
  );
}

export default TodoList;