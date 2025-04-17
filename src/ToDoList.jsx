import TodoListItem from "./TodoListItem";

function TodoList({todoList, onCompleteTodo}) {
  const filteredTodoList = todoList.filter(todo => !todo.isCompleted)
  return (
    <ul>
      
      {filteredTodoList.length === 0 ? (<p>Add todo above to get started</p>):
      (filteredTodoList.map((todo, index) => (
        <TodoListItem todo={todo} key={index} onCompleteTodo={onCompleteTodo}/>
      )))}
    </ul>
  );
}
export default TodoList;
