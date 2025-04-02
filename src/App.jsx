import "./App.css";
import TodoList from "./TodoList.jsx";
import AddTodoForm from "./TodoForm.jsx";
import { useState } from "react";

function App() {
  const [todoList, setTodoList] = useState([]);//initial value is empty array -> causes key pair error

  function handleAddTodo(newTodo){
    setTodoList([...todoList,newTodo]); //destructured
  }
  return (
    <div>
      <h1>Todo List</h1>
      {/* onAddTodo is a prop */}
      <AddTodoForm onAddTodo={handleAddTodo}/> 
      {/* ask about the line below */}
      <TodoList todoList={todoList}/>
    </div>
  );
}

export default App;