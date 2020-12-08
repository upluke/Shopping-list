import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import useInputState from "./hooks/useInputState";
import { TodosContext } from "./context/todos.context";

const useStyles = makeStyles((theme) => ({
  form: {
    marginLeft: "1rem",
    width: "80%",
  },
}));

export default function EditTodoForm({ id, task, toggle }) {
  const [value, handleChange, reset] = useInputState(task);
  const { dispatch } = useContext(TodosContext);
  const classes = useStyles();

  return (
    <form
      className={classes.form}
      onSubmit={(e) => {
        e.preventDefault();
        dispatch({ type: "EDIT", id: id, newTask: value });
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
