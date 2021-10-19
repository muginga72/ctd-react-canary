function AddTodoForm() {
  return (
    <form>
      <div>
        <label htmlFor="todoTitle">Title </label>
        <input type="text" required id="todoTitle" />
        <button>Add</button>
      </div>
    </form>
  );
}

export default AddTodoForm;