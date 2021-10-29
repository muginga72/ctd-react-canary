import React, { useState } from 'react';
import TodoList from './TodoList';
import AddTodoForm from './component/AddTodoForm';

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

function App() {
  const [newTodo, setNewTodo] = React.useState('');
  const [items, setItems] = useState(todoList);

  const addNewTodo = (thing) => {
    const existing = [...items];
    existing.unshift({
      id: items.length,
      title: thing
    });
    setItems(existing);
    setNewTodo('');
  };
  
  return (
    <div>
      <h1 style={{color: "blue"}}>Todo List</h1>

      <AddTodoForm onAddTodo={addNewTodo} newTodo={newTodo} />
      <p>{newTodo}</p>
      <TodoList items={items} />
      
    </div>
  );
}

export default App;
