//todos
// all methods to interact with todos

import React, { createContext } from "react";
import useTodoState from "../hooks/useTodoState";

const defaultTodos = [
  { id: 1, task: "Go fishing", completed: false },
  { id: 2, task: "Drop a plan", completed: true },
  { id: 3, task: "Quit the road", completed: false },
];

export const TodosContext = createContext();

function TodosProvider(props) {
  const todosStuff = useTodoState(defaultTodos);
  return (
    <TodosContext.Provider value={todosStuff}>
      {props.children}
    </TodosContext.Provider>
  );
}
