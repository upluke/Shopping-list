import React from "react";
import Paper from "@material-ui/core/Paper";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import Todo from "./Todo";

export default function TodoList({ todos }) {
  return (
    <Paper>
      <List>
        {todos.map((todo) => (
          <>
            <Todo task={todo.task} key={todo.id} completed={todo.completed} />
          </>
        ))}
        <Divider />
      </List>
    </Paper>
  );
}
