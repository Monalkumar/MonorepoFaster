import React, { useState } from "react";

const TodoApp = () => {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const[editId, setEditId] = useState(0); 

  const handleSubmit = (e) => {
    e.preventDefault();
    if(editId){
        const updatedTodo = todos.map((t)=>editId===t.id?{id:t.id,todo}:t);
        setTodos(updatedTodo);
        setEditId(0);
        setTodo("");
        return;

    }
    if (todo !== "") {
      setTodos([{ id: `${todo}-${Date.now()}`, todo }, ...todos]);
      setTodo("")
    }
  };
  const handleDelet = (id) => {
    const deleTodos = todos.filter((tdl) => tdl.id !== id);
    setTodos(deleTodos);
  };

  const handleEdit =(id)=>{
    const editTodos = todos.find((i)=>i.id === id);
    setTodo(editTodos.todo);
    setEditId(id)
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="type here"
        onChange={(e) => setTodo(e.target.value)}
        value={todo}
      />
      <button>{editId ? "Update Todos" : "Add Todos"}</button>
      <ul>
        {todos.map((t) => (
          <li>
            <span>{t.todo}</span>
            <button  type="button" onClick={()=>handleEdit(t.id)}>Edit Todo</button>
            <button  type="button" onClick={() => handleDelet(t.id)}>Delet Todo</button>
          </li>
        ))}
      </ul>
    </form>
  );
};

export default TodoApp;
