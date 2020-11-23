import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import useInputState from "./hooks/useInputState";

const useStyles = makeStyles((theme) => ({
  form: {
    marginLeft: "1rem",
    width: "80%",
  },
}));

export default function EditTodoForm({ id, task, editTodo, toggle }) {
  const [value, handleChange, reset] = useInputState(task);
  const classes = useStyles();

  return (
    <form
      className={classes.form}
      onSubmit={(e) => {
        e.preventDefault();
        editTodo(id, value);
        toggle();
        reset();
      }}
    >
      <TextField
        margin="normal"
        value={value}
        onChange={handleChange}
        fullWidth
        autoFocus
      />
    </form>
  );
}
