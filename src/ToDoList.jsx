import TodoListItem from "./TodoListItem";

function TodoList({todoList}) {
  return (
    <ul>
      {/* Added a second argument "index" to address error: 
      "Each child in a list should have a unique "key" prop"." */}
      {todoList.map((todo, index) => (
        <TodoListItem todo={todo} key={index}/>
      ))}
    </ul>
  );
}
export default TodoList;
