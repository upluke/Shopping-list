import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import TodoList from "./TodoList";
import TodoForm from "./TodoForm";
import useTodoState from "./hooks/useTodoState";

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
  grid: {
    marginTop: "1rem",
  },
}));

export default function TodoApp() {
  const initialTodos = JSON.parse(window.localStorage.getItem("todos") || "[]");
  // const initialTodos = [
  //   { id: 1, task: "Go fishing", completed: false },
  //   { id: 2, task: "Drop a plan", completed: true },
  //   { id: 3, task: "Quit the road", completed: false },
  // ];
  const { todos, addTodo, removeTodo, toggleTodo, editTodo } = useTodoState(
    initialTodos
  );
  useEffect(() => {
    window.localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  console.log(todos);
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
      <Grid container justify="center" className={classes.grid}>
        <Grid item={true} xs={11} md={9} lg={4}>
          <TodoForm addTodo={addTodo} />
          <TodoList
            todos={todos}
            removeTodo={removeTodo}
            toggleTodo={toggleTodo}
            editTodo={editTodo}
          />
        </Grid>
      </Grid>
    </div>
  );
}

// - TodoApp
//     - TodoForm
//     - TodoList
//         -TodoItem

// each todo: [{id: }, {task: }, {completed}]
