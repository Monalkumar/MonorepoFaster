import React, { useState } from "react";

const Todos = () => {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const[editId,setEditId] = useState(0)
  const handleSubmit = (e) => {
    e.preventDefault(e);

if(editId){
    const updatedTodos = todos.map((t)=> t.id === editId?{ id:t.id, todo} : t)
    setTodos(updatedTodos)
    setEditId(0)
    setTodo("")
    return
}
    if (todo !== "") {
      setTodos([{ id: `${todo}-${Date.now()}`, todo }, ...todos]);
      setTodo("")
    }
  };
  
  const handleDelet = (id)=>{
    const delTodos = todos.filter((tdl)=>tdl.id !==id)
    setTodos(delTodos)
  }

  const handleEdit = (id)=>{
    const editTodos = todos.find((i) => i.id === id)
    setTodo(editTodos.todo)
    setEditId(id)
  }


  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={todo}
        placeholder="type here"
        onChange={(e) => setTodo(e.target.value)}
      />
      <button type="submit">{editId ? "Update Todos":"Add Todos"}</button>
      <div>
        <ul>
          {todos.map((t) => (
            <li key={t.id}>
              <span>{t.todo}</span>
              <button type="button" onClick={()=>handleEdit(t.id)}>Edit</button>
              <button type="button" onClick={()=>handleDelet(t.id)}>Delet</button>
            </li>
          ))}
        </ul>
      </div>
    </form>
  );
};

export default Todos;
