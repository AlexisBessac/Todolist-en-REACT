import ItemTodo from "./ItemTodo.jsx";


export default function ListTodos(props) {
 return (
   <ul>
     {props.todos.map((todo) => (
       <ItemTodo text={todo} />
     ))}
   </ul>
 )
}
