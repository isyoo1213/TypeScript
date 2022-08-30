const NewTodo = () => {
  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
  }

  return (
    <form onSubmit={submitHandler}>
      <label htmlFor="todoText">Todo Text</label>
      <input type="text" id="todoText" />
      <button>Add Todo</button>
    </form>
  );
};

export default NewTodo;
