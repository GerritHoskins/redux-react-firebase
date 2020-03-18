import React, { useState } from "react";
import { useFirebase } from "react-redux-firebase";

function AddTodo() {
  const [inputVal, changeInput] = useState("");
  const firebase = useFirebase();

  function resetInput() {
    changeInput("");
  }
  function onInputChange(e) {
    return changeInput(e && e.target && e.target.value);
  }
  function addTodo() {
    //    connect(AddTodo).dispatch(addTodo(input.value));
    return firebase.push("todos", { text: inputVal || "sample", done: false }, resetInput());
  }

  return (
    <div>
      <span>New Todo</span>
      <input value={inputVal} onChange={onInputChange} />
      <button onClick={addTodo}>Add</button>
      <button onClick={resetInput}>Cancel</button>
    </div>
  );
}

export default AddTodo;
