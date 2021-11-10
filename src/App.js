import { useState } from 'react';
import TodoList from './TodoList';
import AddTodoForm from './component/AddTodoForm';

function App() {
  const [newTodo, setNewTodo] = useState('');
  const [todoList, setTodoList] = useState([{id: 1, title: 'Running' }])
  
  return (
    <div>
      <h1 style={{color: "blue"}}>Todo List</h1>

      <AddTodoForm onAddTodo={setNewTodo} newTodo={newTodo} />
      <p>{newTodo}</p>
      <TodoList todoList={ todoList } />
      
    </div>
  );
}

export default App;
