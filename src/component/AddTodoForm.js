import { useState } from 'react';

function AddTodoForm(props) {
  const [inputVal, setInputVal] = useState('');

  const handleAddTodo = (newItem) => {
    console.log(newItem);
    props.onAddTodo(newItem);
    setInputVal('');
  }

  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      handleAddTodo(inputVal);
    }
    }>
      <div>
        <label
          htmlFor="todoTitle"><strong>Title: </strong>
        </label>
        <input
          type="text"
          name="title" required
          id="todoTitle"
          placeholder="Add new todo"
          onChange={e => setInputVal(e.target.value)}
          value={inputVal}
        />
        <button style={{color: "blue"}}>Add</button>
        <hr/>
      </div>
    </form>
  );
}

export default AddTodoForm;