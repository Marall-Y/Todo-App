import React, { useState, createContext } from "react";

export const todoContext = createContext();

export const TodoProvider = (props) => {
  const [todo, setTodo] = useState({});

  return (
    <todoContext.Provider value={[todo, setTodo]}>
      {props.children}
    </todoContext.Provider>
  );
};
