import { useState, useEffect } from "react";
import TodoList from "./TodoList";
import AddTodoForm from "./component/AddTodoForm";

const initialTodoList = "firstApp.todos";

function App() {  
  const [todoList, setTodoList] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({
          data: {
            todoList: JSON.parse(localStorage.getItem(initialTodoList)) || []
          }
        })
      }, 2000);
    })
      .then(({ data }) => {
        setTodoList(data.todoList);
        setIsLoading(false);
      });
  }, []); 
  
  useEffect(() => {
    if (!isLoading)
    localStorage.setItem(initialTodoList, JSON.stringify(todoList));
  }, [todoList, isLoading]);

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
      {/* Second Bug */}
      {isLoading ? (
        <p>Loading… </p>
      ) : (
        <TodoList todoList={todoList}
          removeTodo={removeTodo}
        />
      )}
    </>
  );
}

export default App;
