import React, { useState } from "react";

const TodoSystems = () => {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const [editId, setEditId] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editId) {
      const updateTodos = todos.map((t) =>
        editId === t.id ? { id: t.id, todo } : t
      );
      setTodos(updateTodos);
      setEditId(0);
      setTodo("");
      return;
    }

    if (todo !== "") {
      setTodos([{ id: `${todo}-${Date.now()}`, todo }, ...todos]);
    }
    setTodo("");
  };

  const handleDelet = (id) => {
    const deleTodos = todos.filter((tdl) => tdl.id !== id);
    setTodos(deleTodos);
  };
  const handleEdit = (id) => {
    const editTodo = todos.find((i) => i.id === id);
    setTodo(editTodo.todo);
    setEditId(id);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={todo}
        placeholder="type here"
        onChange={(e) => setTodo(e.target.value)}
      />
      <button type="submit">{editId ? "update Todos" : "Add Todos"}</button>

      <ul>
        {todos.map((t) => (
          <li key={t.id}>
            <span>{t.todo}</span>
            <button type="button" onClick={() => handleEdit(t.id)}>
              Edit
            </button>
            <button type="button" onClick={() => handleDelet(t.id)}>
              Delet
            </button>
          </li>
        ))}
      </ul>
    </form>
  );
};

export default TodoSystems;
