import React,{useState} from "react";

const TodosApp =()=>{
    const [todo,setTodo] = useState("");
    const [todos,setTodos] = useState([]);
    const[editId,setEditId] = useState( null)

    const handleSubmit=(e)=>{
        e.preventDefault();

        if(editId){
            const updatedTodo = todos.map((t)=>t.id ===editId?{id:t.id,todo}:t);
            setTodos(updatedTodo);
            setEditId(null)
            setTodo("")
            return
        }
        if(todo !== " " ){
            setTodos([{id:`${todo.id}-${Date.now()}`,todo}, ...todos])
        }
        setTodo("")
    }

    const handleDelte = (id)=>{
        const delTodos = todos.filter((tdl)=>tdl.id !==id);
        setTodos(delTodos)
    }
    const handleEdit =(id)=>{
        const editTodos = todos.find((i)=>i.id ===id);
        setTodo(editTodos.todo)
        setEditId(id)
    }
    return(
        <div>
        <form onSubmit={handleSubmit}> 
        <input  type="text" value={todo} placeholder="search here ...." onChange={(e)=>setTodo(e.target.value)}/>
        <button type="submit">Add Todos</button>
        </form>
        <div>
        <ul>
        
        {todos.map((t)=>(
            <div><span>{t.todo}</span>
            <button type ="button" onClick={()=>handleEdit(t.id)}>Edit</button>
            <button type="button" onClick={()=>handleDelte(t.id)}>Delet</button>
            </div>
        ))}
        
        </ul>
        </div>
        </div>
    ) 
}

export default TodosApp;