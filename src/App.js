import { useState, useEffect } from "react";
import TodoList from "./TodoList";
import AddTodoForm from "./component/AddTodoForm";

const savedTodoList = "firstApp.todos";

function useSemiPersistentState() {
  const [todoList, setTodoList] = useState
    (JSON.parse(localStorage.getItem(savedTodoList)) || []);

  useEffect(() => {
    localStorage.setItem(savedTodoList, JSON.stringify(todoList));
  }, [todoList]);

  return [todoList, setTodoList];
}

function App() {
  const [todoList, setTodoList] = useSemiPersistentState([]);
  function addTodo(newTodo) {
    setTodoList([...todoList, newTodo]);
  }

  const removeTodo = (id) => {
    const updatedTodos = todoList.filter((todo) => todo.id !== id);
    setTodoList(updatedTodos);
  };

  return (
    <>
      <h1 style={{ color: "blue" }}>Todo List</h1>
      <AddTodoForm
        onAddTodo={addTodo}
      />
      <TodoList
        todoList={todoList}
        removeTodo={removeTodo}
      />
    </>
  );
}

export default App;
