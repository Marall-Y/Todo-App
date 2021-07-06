import React, { useState, createContext } from "react";

export const modalContext = createContext();

export const ModalProvider = (props) => {
  const [modalState, setModalState] = useState(false);

  return (
    <modalContext.Provider value={[modalState, setModalState]}>
      {props.children}
    </modalContext.Provider>
  );
};
