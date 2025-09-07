import React, { useState, useEffect } from "react";
import UseMemoExample from "./UseMemo";
import TodoList from "./ReactMemo";

function App() {
  const [todos, setTodos] = useState(["Learn React", "Build a project"]);
  const [counter, setCounter] = useState(0);
  const [taskInput, setTaskInput] = useState("");

  // useEffect example: log whenever counter updates
  useEffect(() => {
    console.log("Counter updated:", counter);
  }, [counter]);

  // Add a new todo (default)
  const addTodo = () => {
    setTodos([...todos, "New todo"]);
  };

  // Add custom todo if valid
  const addCustomTodo = () => {
    if (taskInput.length > 5) {
      setTodos([...todos, taskInput]);
      setTaskInput("");
    } else {
      alert("Task must be more than 5 characters");
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>React Todo + Counter App</h1>

      {/* Counter */}
      <h2>Counter: {counter}</h2>
      <button onClick={() => setCounter(counter + 1)}>Increment</button>

      <hr />

      {/* Todos */}
      <h2>Todo List</h2>
      <TodoList todos={todos} /> {/* React.memo component */}

      <button onClick={addTodo}>Add Todo</button>

      <div style={{ marginTop: "10px" }}>
        <input
          type="text"
          placeholder="Enter custom task"
          value={taskInput}
          onChange={(e) => setTaskInput(e.target.value)}
        />
        <button onClick={addCustomTodo}>Submit</button>
      </div>

      <hr />

      {/* useMemo Example */}
      <UseMemoExample counter={counter} />
    </div>
  );
}

export default App;
