import React, {useState} from "react";

const TaskManagement = () => {
    const[todo, setTodo] = useState("");
    const[todos, setTodos] = useState([]);
    const[editId, seEditId] = useState(0);



const handleSubmit =(e)=>{
    e.preventDefault();
    if(editId){
        const updatedTodos = todos.map((t)=>t.id === editId ? {id:t.id, todo}:t);
        setTodos(updatedTodos);
        seEditId(0);
        setTodo("");
        return

    }
    if(todo !==""  ){
        setTodos([{id:`${todo}-${Date.now()}`, todo}, ...todos])
        setTodo("")
        
       
}
}
const handleDelet =(id)=>{
    const delTodos = todos.filter((tdl)=>tdl.id !==id);
    setTodos(delTodos)
}

const haandleEdit =(id)=>{
    const editTodos = todos.find((i)=>i.id === id);
    setTodo(editTodos.todo)
    seEditId(id)
}
    return(
        <div>
        <form onSubmit={handleSubmit}>
        <input type ="text" value={todo} placeholder="type here" onChange={(e)=>setTodo(e.target.value)}/>
        <button>{editId ?"Update Todos": "Add Todos"}</button>
        
        

        {todos.map((t)=>(
            <ul>
           <span>{t.todo}</span>
           <button type="button" onClick={()=>haandleEdit(t.id)}>Edit</button>
           <button type="button" onClick={()=>handleDelet(t.id)}>Delet</button>
          </ul>
           
        ))}
        
        </form>
        </div>
    )
}

export default TaskManagement;