import { useState, useEffect } from "react";
import TodoList from "./TodoList";
import AddTodoForm from "./component/AddTodoForm";
import { BrowserRouter, Route, Switch } from "react-router-dom";

const initialTodoList = "firstApp.todos";

function App() {  
  const [todoList, setTodoList] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    fetch('https://api.airtable.com/v0/app6WkPQtNjU0dxxU/Default',
      {
        headers: { "Authorization": "Bearer key889ohx5Mc5ygVh" }
      })
      .then((res) => res.json())
      .then((result) => {
        setTodoList(result.records)
        setIsLoading(false);
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
    })
  }, [])
  
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
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
            <h1 style={{ color: "blue" }}>Todo List</h1>
            <AddTodoForm
              onAddTodo={addTodo}
            />
            {isLoading ? (
              <p>Fetching Data... </p>
            ) : (
              <TodoList todoList={todoList}
                removeTodo={removeTodo}
              />
          )}
        </Route>
        <Route path="/new">
          <h1 style={{ color: "Orange" }}>New Todo List</h1>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;