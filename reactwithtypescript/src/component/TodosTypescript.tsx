import React,{useState} from "react";

type Todo={
    id:string,
    todo:string,
}
const TodosTypescript:React.FC=()=>{
    const[todo,setTodo] = useState<string>("");
    const[todos,setTodos] = useState<Todo[]>([]);
    const[editId,setEditId] = useState<string|null>(null)
    
    const handleSubmit =(e:React.FormEvent)=>{
        e.preventDefault();
        if(editId){
            const updatedTodos = todos.map((t)=>editId===t.id?{id:t.id,todo}:t);
            setTodos(updatedTodos);
            setEditId(null);
            setTodo("");
            return
        }
        if(todo !==""){
            setTodos([{id:`${todo}-${Date.now()}`,todo},...todos]);
            }
            setTodo("");
        }
            
           const handleDelet =(id:string)=>{
            const deleTodos = todos.filter((tdl)=>tdl.id !==id);
            setTodos(deleTodos)
           }
           const handleEdit = (id:string)=>{
            const editTodos = todos.find((i)=>i.id ===id);
             if(!editTodos) return
            setTodo(editTodos.todo);
           
            setEditId(id)
           }
    return(
            <form onSubmit={handleSubmit}>
            <input type = "text" placeholder="type here" value={todo} onChange={(e)=>setTodo(e.target.value)}/>
            <button>Add Todos</button>
            <div>
                <ul>
                    {todos.map((t)=>(
                         <li>
                        <span>{t.todo}</span>
                        <button type="button" onClick={()=>handleEdit(t.id)}>Edit</button>
                        <button type="button" onClick={()=>handleDelet(t.id)}>Delet</button>
                    </li>
                    ))}
                    
                    </ul>
            </div>
            </form>
    )
}
export default TodosTypescript;