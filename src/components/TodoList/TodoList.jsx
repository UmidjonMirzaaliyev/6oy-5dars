import React from "react";

function TodoList({ todos, removeTodo }) {
  return (
    <div>
      {todos.map((todo, index) => (
        <div key={index} className="todo">
          <span>{todo.text}</span>
          <button onClick={() => removeTodo(index)} className="delete-btn">
            🗑
          </button>
        </div>
      ))}
    </div>
  );
}

export default TodoList;
