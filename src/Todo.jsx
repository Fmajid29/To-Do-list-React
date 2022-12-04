import React, { useState } from "react";

const Todo = (props) => {
  const [shown, setShown] = useState(true);
  const [text, setText] = useState(props.txt);
  const [edit, setEdit] = useState(false);

  function hide() {
    setShown((pre) => !pre);
  }

  function Edit() {
    setEdit((pre) => !pre);
  }

  function handletext(event) {
    setText(event.target.value);
  }

  let content;

  if (!edit) {
    content = (
      <div className={shown ? "todo" : "hidden"}>
        <h3>{text}</h3>
        <button onClick={hide} className="delete">
          Delete
        </button>
        <button onClick={Edit} className="edit">
          Edit
        </button>
      </div>
    );
  } else {
    content = (
      <div className="enter">
        <input
          type="text"
          className="inpt"
          placeholder="Enter Chore"
          onChange={handletext}
          value={text}
        ></input>
        <button onClick={Edit}>Edit</button>
      </div>
    );
  }

  return content;
};

export default Todo;
