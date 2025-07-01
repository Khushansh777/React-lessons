import React from "react";
import { useEffect } from "react";
import { useState } from "react";

function TodoList() {
  const [todos, settodos] = useState(() => {
    const todos = localStorage.getItem("todos");
    return todos ? JSON.parse(todos) : [];
  });
  const [inputVal, setinputVal] = useState("");
  const handleSubmit = () => {
    settodos([...todos, inputVal]);
    setinputVal("");
  };
  const handleInput = (e) => {
    setinputVal(e.target.value);
  };
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);
  return (
    <div>
      <h1>TODO</h1>
      <input
        type="text"
        value={inputVal}
        placeholder="Enter your TODO"
        onChange={handleInput}
      />
      <ul>
        {todos.map((todo) => {
          return <li>{todo}</li>;
        })}
      </ul>
      <button onClick={handleSubmit}>Add</button>
    </div>
  );
}

export default TodoList;
