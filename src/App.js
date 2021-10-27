import React from 'react';
import TodoList from './TodoList';
import AddTodoForm from './component/AddTodoForm';




function App() {
  return (
    <div>
      <h1>Todo List</h1>

      {/* Rendering todo list and the form */}
      <AddTodoForm />
      <TodoList />
      

    </div>
  );
}

export default App;
