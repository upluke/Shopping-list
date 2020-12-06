import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import useInputState from "./hooks/useInputState";
import { TodosContext } from "./context/todos.context";
const useStyles = makeStyles((theme) => ({
  paper: {
    margin: "1rem 0",
    padding: "0 1rem",
  },
}));

function TodoForm() {
  const [value, handleChange, reset] = useInputState("");
  const { addTodo } = useContext(TodosContext);
  const classes = useStyles();
  return (
    <Paper className={classes.paper}>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          addTodo(value);
          reset();
        }}
      >
        <TextField
          value={value}
          onChange={handleChange}
          margin="normal"
          label="Add New Todo"
          fullWidth
        />
      </form>
    </Paper>
  );
}

export default TodoForm;
