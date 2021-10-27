function AddTodoForm() {
  return (
    <form>
      <div>
        <label htmlFor="todoTitle"><strong>Title:</strong> </label>
        <input type="text" required id="todoTitle" />
        <button>Add</button>
      </div>
    </form>
  );
}

export default AddTodoForm;