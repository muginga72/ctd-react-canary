import { useState, useEffect } from "react";
import TodoList from "./components/TodoList";
import AddTodoForm from "./components/AddTodoForm";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import styles from './App.module.css';
import TodoContainer from "./components/TodoContainer";
import Footer from "./Footer"

const initialTodoList = "reactApp.todos";

const AIRTABLEAPI = process.env.REACT_APP_AIRTABLE_API_KEY;
const AIRTABLEBASEID = process.env.REACT_APP_AIRTABLE_BASE_ID;
const AIRTABLETABLENAME = "Default";
const url = `https://api.airtable.com/v0/${AIRTABLEBASEID}/${AIRTABLETABLENAME}`

function App() {
  const [todoList, setTodoList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isEditing, setIsEditing] = useState(false);
  const [isDeleted, setIsDeleted] = useState(false);
  const [isUpadting, setIsUpdating] = useState(true)
  
  // Sending a "POST" request to add record on the table.
  function addTodo(newTodo) {
    setTodoList([...todoList, newTodo]);
  }

  useEffect(() => {
    if (!isUpadting)
    localStorage.setItem(initialTodoList, JSON.stringify(todoList));
  }, [todoList, isUpadting]);

  // Sending a "PUT" request to the record  to update the table.
  const submitEditedTodo = (id, newTodo) => {
    let newTodoListItem;
    
    const editedTodoList = [...todoList].map((todoListItem) => {
      
      if (todoListItem.id === id) {
        const temp = {...todoListItem};
        temp.fields.Title = newTodo;
        newTodoListItem = {
          id: temp.id,
          fields: { Title: temp.fields.Title }
        }

        return temp;
      }
      return todoListItem;
    });
    console.log(newTodoListItem)

    fetch(`${url}`,
      {
        method: "PUT",
        body: JSON.stringify({ records: [newTodoListItem] }),
        headers: {
          'Authorization': `Bearer ${AIRTABLEAPI}`,
          "Content-Type": "application/json",
        },
      })
      .then((res) => res.json())
      .then((result) => {
        setIsEditing(true);
        console.log(result);
        setTodoList(editedTodoList)
      })
      .catch((error) => {
        console.log(error);
      })
    }

  useEffect(() => {
    if (!isEditing)
    localStorage.setItem(initialTodoList, JSON.stringify(todoList));
  }, [todoList, isEditing]);
  
  // Sending a "DELETE" request to the record to be delete on the table.
  const removeTodo = (id) => {
    const updatedTodos = todoList.filter((todo) => todo.id !== id);
    setTodoList(updatedTodos);

    fetch(`${url}/${id}`, 
      {
        method: "delete",
        headers: {
          'Authorization': `Bearer ${AIRTABLEAPI}`,
          "Content-Type": "application/json",
        },
      })
      .then((res) => res.json())
      .then((result) => {
        setIsDeleted(false);
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
    })
  };

  useEffect(() => {
    if (!isDeleted)
    localStorage.setItem(initialTodoList, JSON.stringify(todoList));
  }, [todoList, isDeleted]);

  // Sending a "GET" request to fetch the existing records on our table.
  useEffect(() => {
    fetch(`${url}`, {
        headers: { "Authorization": `Bearer ${AIRTABLEAPI}` }
      })
      .then((res) => res.json())
      .then((result) => {
        console.log(result)
        setTodoList(result.records)
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
    })
  }, [])
  
  useEffect(() => {
    if (!isLoading)
    localStorage.setItem(initialTodoList, JSON.stringify(todoList));
  }, [todoList, isLoading]);

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
                      removeTodo={(id) => removeTodo(id)}
                      submitEditedTodo={submitEditedTodo}
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