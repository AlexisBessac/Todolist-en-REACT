import './App.css'
import { useState } from "react";
import FormInput from './FormInput.jsx';
import ListTodos from './ListTodos.jsx';


function App() {
 const [todos, setTodos] = useState(['Item #1', 'Item #10']);


 const handleNewItem = (name) => {
   const newTodos = todos.slice();
   newTodos.push(name);
   setTodos(newTodos);
 }


 return (
   <>
     <FormInput onNewItem={handleNewItem} />
     <ListTodos todos={todos} />
   </>
 )
}


export default App;