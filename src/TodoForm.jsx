import { useRef } from 'react';

function TodoForm({onAddTodo}) {
  const todoTitleInput = useRef();

  function handleAddTodo(event){
    // prevents page from refreshing when a user clicks the "Add Todo" button
    event.preventDefault();
    const title = event.target.title.value; 
    onAddTodo(title);
    event.target.title.value = "";
    todoTitleInput.current.focus();//adds focus when clicking the "Add Todo" button
  }
  return (
    /*
    When the form submits, the event listener will 
    fire off the function & pass it the submit event's event object
    */ 
    <form onSubmit={handleAddTodo}>
      <label htmlFor="todoTitle">Todo</label>
      <input id="todoTitle" name="title" ref={todoTitleInput}/>
      <button>Add Todo</button>
    </form>
  );
}
export default TodoForm;
