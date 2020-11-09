import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import TodoList from "./TodoList";
import TodoFrom from "./TodoFrom";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: 0,
    margin: 0,
    height: "100vh",
    backgroundColor: "gray",
  },

  appBar: {
    height: theme.spacing(8),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function TodoApp() {
  const initialTodos = [
    { id: 1, task: "Go fishing", completed: false },
    { id: 2, task: "Drop a plan", completed: false },
    { id: 3, task: "Quit the road", completed: false },
  ];
  const [todos, setTodos] = useState(initialTodos);
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar className={classes.appBar} color="secondary" position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Market-list
          </Typography>
        </Toolbar>
      </AppBar>
      <TodoFrom />
      <TodoList todos={todos} />
    </div>
  );
}

// - TodoApp
//     - TodoForm
//     - TodoList
//         -TodoItem

// each todo: [{id: }, {task: }, {completed}]
