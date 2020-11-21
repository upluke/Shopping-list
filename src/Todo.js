import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Checkbox from "@material-ui/core/Checkbox";
import IconButton from "@material-ui/core/IconButton";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import EditIcon from "@material-ui/icons/Edit";
import useToggleState from "./hooks/useToggleState";
import EditTodoForm from "./EditTodoForm";

export default function Todo({
  id,
  task,
  completed,
  removeTodo,
  toggleTodo,
  editTodo,
}) {
  const [isEditing, toggle] = useToggleState(false);

  return (
    <ListItem>
      {isEditing ? (
        <EditTodoForm id={id} task={task} editTodo={editTodo} toggle={toggle} />
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
