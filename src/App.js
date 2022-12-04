import { useState } from "react";
import "./App.css";
import Todo from "./Todo.jsx";

function App() {
  const [text, setText] = useState("");
  const [todos, setTodos] = useState([]);

  function handleText(event) {
    setText(event.target.value);
  }

  function handleTodos() {
    setTodos((pre) => [...pre, <Todo txt={text} />]);
  }

  return (
    <>
      <h1 className="heading">To-Do List</h1>
      <div className="enter">
        <input
          type="text"
          className="inpt"
          onChange={handleText}
          value={text}
          placeholder="Enter Chore"
        ></input>
        <button onClick={handleTodos}>Add</button>
      </div>
      <div className="todos">{todos}</div>
    </>
  );
}

export default App;
