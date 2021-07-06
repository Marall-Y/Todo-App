import React, { useState, createContext } from "react";

export const TodoItemsContext = createContext();

const initialTodoItems = localStorage.getItem("todoItems")
  ? JSON.parse(localStorage.getItem("todoItems"))
  : [];

export const TodoItemsProvider = (props) => {
  const [todoItems, setTodoItems] = useState(initialTodoItems);

  return (
    <TodoItemsContext.Provider value={[todoItems, setTodoItems]}>
      {props.children}
    </TodoItemsContext.Provider>
  );
};
