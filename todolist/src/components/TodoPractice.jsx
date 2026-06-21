import React,{useState} from "react";

const TodoPractice = () => {
    const[todo,setTodo] = useState("");
    const[todos,setTodos] = useState([]);
    const [editId,setEditId] = useState(0)

    const handleSubmit = (e)=>{
        e.preventDefault()
        if(editId){
          const updateTodos = todos.map((t)=>editId===t.id? {id:t.id,todo}:t);
          setTodos(updateTodos);
          setEditId(0);
          setTodo("");
          return

        }
        if(todo !== ""){
       setTodos([{id:`${todo}-${Date.now()}`,todo},...todos])
        }
       setTodo("")
    }

    const handleDelet=(id)=>{
        const delTodos = todos.filter((tdl)=>tdl.id !==id);
        setTodos(delTodos)
    }
     const handleEdit=(id)=>{
        const editTodos = todos.find((i)=>i.id ===id);
        setTodo(editTodos.todo);
        setEditId(id)
    }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="type here..." onChange={(e)=>setTodo(e.target.value)} value={todo} />
        <button type="submit">{editId ? "Update todo" : "Add Todos"}</button>
        <ul>
        {

            todos.map((t)=>(
              
          <li>
            <span>{t.todo}</span>
            <button type ="button" onClick={()=>handleEdit(t.id)}>Edit</button>
            <button type="button" onClick={()=>handleDelet(t.id)}>Delet</button>
          </li>
        ))
        }
       
         
        </ul>
      </form>
    </div>
  );
};

export default TodoPractice;
