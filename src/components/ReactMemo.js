import React from "react";

// This component only re-renders when "todos" changes
const TodoList = React.memo(({ todos }) => {
  console.log("Rendering TodoList...");
  return (
    <ul>
      {todos.map((todo, index) => (
        <li key={index}>{todo}</li>
      ))}
    </ul>
  );
});

export default TodoList;
