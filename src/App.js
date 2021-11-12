import { useState } from 'react';
import TodoList from './TodoList';
import AddTodoForm from './component/AddTodoForm';

function App() {
  function addTodo(newTodo) {
    setTodoList([...todoList, newTodo])
  }

  const [todoList, setTodoList] = useState([])
  console.log(todoList)

  return (
    <div>
      <h1 style={{color: "blue"}}>Todo List</h1>
      <AddTodoForm onAddTodo={ addTodo }/>
      <TodoList todoList={ todoList } />
    </div>
  );
}

export default App;
