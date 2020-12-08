import React, { useContext } from "react";
import Paper from "@material-ui/core/Paper";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import Todo from "./Todo";
import { TodosContext } from "./context/todos.context";

export default function TodoList() {
  const { todos } = useContext(TodosContext);
  if (todos.length)
    return (
      <Paper>
        <List>
          {todos.map((todo, index) => (
            <div key={todo.id}>
              <Todo
                {...todo}
                // id={todo.id}
                // task={todo.task}

                // completed={todo.completed}
                // removeTodo={removeTodo}
                // toggleTodo={toggleTodo}
                // editTodo={editTodo}
              />
              {index < todos.length - 1 && <Divider />}
            </div>
          ))}
        </List>
      </Paper>
    );
  return null;
}
