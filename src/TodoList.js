import React from 'react';
import TodoListItem from './component/TodoListItem';

const todoList = [
  {
    id: '0',
    title: 'Complete assignment Lesson 1-2'
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
  const todo = todoList;
  return (
    <div>
      <ul>

      </ul>
    </div>
  );
}

export default TodoList;