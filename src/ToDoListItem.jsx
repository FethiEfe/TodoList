function TodoListItem({todo}){
    return(
        // treat todo as a string not an object
        <li>{todo}</li>
    );
}
export default TodoListItem;