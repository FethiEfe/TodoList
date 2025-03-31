import "./App.css";
import TodoList from "./ToDoList.jsx";
import AddTodoForm from "./TodoForm.jsx";
import { useState } from "react";

function App() {
  const [newTodo, setNewTodo] = useState("Example Text");//initial value is newTodo
  return (
    <div>
      <h1>Todo List</h1>
      <AddTodoForm />
      <p>{newTodo}</p>
      <TodoList />
    </div>
  );
}

export default App;