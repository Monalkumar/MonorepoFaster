import React from "react";
import { useState } from "react";

const Golu = ()=>{
    const [todo,setTodo] = useState("");
    const [todos, setTodos] = useState([]);
    const[editId,setEditId] = useState(0);
    

        const handleSubmit =(e)=>{
        e.preventDefault();
        if(editId){
            const updatedTodo = todos.map((t)=>t.id === editId ? {id:t.id,todo}:t)
            setTodos(updatedTodo);
            setEditId(0);
            setTodo("");
            return
        }


        if(todo!==""){
            setTodos([{id:`${todo}-${Date.now()}`, todo}, ...todos])
             setTodo("")
        }
       
    }

    const handleEdit =(id)=>{
        const ediTodos = todos.find((i)=>i.id === id)
        setTodo(ediTodos.todo)
        setEditId(id)
    }
    const handleDelet =(id)=>{
        const delTodos = todos.filter((tdl)=>tdl.id !==id)
        setTodos(delTodos)
    }

    return(
        <div>
        <form onSubmit={handleSubmit}>
        <input type="text" placeholder="type here" value={todo} onChange={(e)=>setTodo(e.target.value)}/>
        <button>{editId ? "Update Todos":"Add Todos"}</button>
        <ul>
        {todos.map((t)=>(
            <li key={t.id}>
        <span>{t.todo}</span>
        <button type="button" onClick={()=>handleEdit(t.id)}>Edit</button>
        <button type="button" onClick={()=>handleDelet(t.id)}>Delet</button>
        </li>
        ))}


        
        </ul>
        </form>
        </div>
    )
}
export default Golu;