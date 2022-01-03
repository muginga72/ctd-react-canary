import { useState, useEffect } from "react";
import TodoList from "./components/TodoList";
import AddTodoForm from "./components/AddTodoForm";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import styles from './App.module.css';
import TodoContainer from "./components/TodoContainer";
import Footer from "./Footer";

const initialTodoList = "firstApp.todos";

function App() {  
  const [todoList, setTodoList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(`https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_ID}/Default`,
      {
        headers: { "Authorization": `Bearer ${process.env.REACT_APP_AIRTABLE_API_KEY}` }
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
    //API call to airtable adding new todo??
  }

  const removeTodo = (id) => {
    const updatedTodos = todoList.filter((todo) => todo.id !== id);
    setTodoList(updatedTodos);
    // API call removing this todo from airtable??
  };

  return (
    <>
      <TodoContainer />
        <div className={styles.app}>
          <BrowserRouter>
            <Switch>
              <Route exact path="/">
                <div className={styles.container}>
                  <h1 className={styles.headlineTitle}
                    >Todo List <i className="fas fa-user-check"/>
                  </h1>
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
      <div>
        <Footer />
      </div>
    </>
  );
}

export default App;