import { useState } from "react";


export default function FormInput(props) {
 const [name, setName] = useState("");


 const handleSubmit = (e) => {
   e.preventDefault();
   props.onNewItem(name);
   setName("");
 }


 return (
   <form onSubmit={handleSubmit}>
     <input
       type="text"
       value={name}
       onChange={(e) => setName(e.target.value)}
     />
     <button type="submit">Add item</button>
   </form>
 )
}
