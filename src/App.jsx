import "./App.css";
import TodoList from "./ToDoList.jsx";
import AddTodoForm from "./TodoForm.jsx";

function App() {
  //const todoList = new TodoList();
  return (
    <div>
      <h1>Todo List</h1>
      <AddTodoForm />
      <TodoList />
    </div>
  );
}

export default App;
