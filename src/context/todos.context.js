import React, { createContext } from "react";
// import useTodoState from "../hooks/useTodoState";
import todoReducer from "../reducers/todo.reducer";
import useLocalStorageReducer from "../hooks/useLocalStorageReducer";
const defaultTodos = [
  { id: 1, task: "Vegetable", completed: false },
  { id: 2, task: "Fruits", completed: false },
  { id: 3, task: "Beef", completed: false },
];

export const TodosContext = createContext();
export const DispatchContext = createContext();

export function TodosProvider(props) {
  //   const todosStuff = useTodoState(defaultTodos);
  // const [todos, dispatch] = useReducer(todoReducer, defaultTodos);    # 3
  const [todos, dispatch] = useLocalStorageReducer(
    "todos",
    defaultTodos,
    todoReducer
  );
  return (
    <TodosContext.Provider value={todos}>
      <DispatchContext.Provider value={dispatch}>
        {props.children}
      </DispatchContext.Provider>
    </TodosContext.Provider>
  );
}
