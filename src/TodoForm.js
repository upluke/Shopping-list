import React from "react";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import useInputState from "./hooks/useInputState";

function TodoForm() {
  const [value, handleChange, reset] = useInputState("");
  return (
    <Paper>
      {value}
      <TextField value={value} onChange={handleChange} />
    </Paper>
  );
}

export default TodoForm;
