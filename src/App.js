import { useState, useEffect } from "react";
import TodoList from "./TodoList";
import AddTodoForm from "./component/AddTodoForm";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import styles from './App.module.css';

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
    <div className={styles.app}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <div className={styles.container}>
              <h1 className={styles.headlineTitle}
              >Todo List</h1>
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
            </div>
          </Route>
          <Route path="/new">
            <h1 style={{ color: "Blue" }}>New Todo List</h1>
            <p>React is awesome!</p>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;