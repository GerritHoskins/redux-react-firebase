import React, { useState } from "react";
import { useFirebase, isLoaded } from "react-redux-firebase";
import { Input, Button, DialogTitle } from "@material-ui/core/";

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
    let addTodoIsComplete = firebase.push("todos", { text: inputVal || "sample", done: false }, resetInput());
    if (!isLoaded(addTodoIsComplete)) {
      return "Loading";
    }else {
      return addTodoIsComplete;
    }     
  }

  return (
    <div>
      <DialogTitle>New Todo</DialogTitle>
      <Input value={inputVal} onChange={onInputChange} />
      <Button onClick={addTodo}>Add</Button>
      <Button onClick={resetInput}>Cancel</Button>
    </div>
  );
}

export default AddTodo;
