import React, { createContext, useReducer } from "react";
// import useTodoState from "../hooks/useTodoState";
import todoReducer from "../reducers/todo.reducer";

const defaultTodos = [
  { id: 1, task: "Go fishing", completed: false },
  { id: 2, task: "Drop a plan", completed: true },
  { id: 3, task: "Quit the road", completed: false },
];

export const TodosContext = createContext();
export const DispatchContext = createContext();

export function TodosProvider(props) {
  //   const todosStuff = useTodoState(defaultTodos);
  const [todos, dispatch] = useReducer(todoReducer, defaultTodos);
  return (
    <TodosContext.Provider value={todos}>
      <DispatchContext.Provider value={dispatch}>
        {props.children}
      </DispatchContext.Provider>
    </TodosContext.Provider>
  );
}
