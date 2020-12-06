import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Checkbox from "@material-ui/core/Checkbox";
import IconButton from "@material-ui/core/IconButton";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import EditIcon from "@material-ui/icons/Edit";
import useToggleState from "./hooks/useToggleState";
import EditTodoForm from "./EditTodoForm";
import { TodosContext } from "./context/todos.context";

const useStyle = makeStyles((theme) => ({
  listItem: {
    height: "64px",
  },
}));

export default function Todo({ id, task, completed }) {
  const [isEditing, toggle] = useToggleState(false);
  const { removeTodo, toggleTodo } = useContext(TodosContext);
  const classes = useStyle();
  console.log("id:", id, "task:", task);
  return (
    <ListItem className={classes.listItem}>
      {isEditing ? (
        <EditTodoForm id={id} task={task} toggle={toggle} />
      ) : (
        <>
          <Checkbox
            tabIndex={-1}
            checked={completed}
            onClick={() => toggleTodo(id)}
          />
          <ListItemText
            style={{ textDecoration: completed ? "line-through" : "none" }}
          >
            {task}
          </ListItemText>
          <ListItemSecondaryAction>
            <IconButton aria-label="Delete" onClick={() => removeTodo(id)}>
              <DeleteForeverIcon />
            </IconButton>
            <IconButton aria-label="Edit" onClick={() => toggle()}>
              <EditIcon />
            </IconButton>
          </ListItemSecondaryAction>
        </>
      )}
    </ListItem>
  );
}
