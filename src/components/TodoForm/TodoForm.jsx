import React, { useState } from "react";

function TodoForm({ addTodo }) {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input) return;
    addTodo({
      text: input,
      isComplete: false,
    });
    setInput("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Add your new todo"
      />
      <button type="submit" className="add-btn">
        +
      </button>
    </form>
  );
}

export default TodoForm;
