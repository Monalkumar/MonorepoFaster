import React, { useState } from "react";

const Todos = () => {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault(e);
    if (todo !== "") {
      setTodos([{ id: `${todo}-${Date.now()}`, todo }, ...todos]);
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="type here"
        onChange={(e) => setTodo(e.target.value)}
      />
      <button type="button">Add Todos</button>
      <div>
        <ul>
          {todos.map((t) => (
            <li>
              <span>{t.todo}</span>
              <button>Edit</button>
              <button>Delet</button>
            </li>
          ))}
        </ul>
      </div>
    </form>
  );
};

export default Todos;
