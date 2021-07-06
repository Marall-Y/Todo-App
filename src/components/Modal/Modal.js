import React, { useContext } from "react";
import Backdrop from "../../components/Backdrop/Backdrop";
import { modalContext } from "../../context/modalContext";

import "./Modal.css";

const Modal = (props) => {
  const [modalState, setModalState] = useContext(modalContext);

  // Modal Toggle
  const toggleModalHandler = () => {
    setModalState((prevState) => !prevState);
  };

  return (
    <>
      <Backdrop show={modalState} click={toggleModalHandler} />
      <div
        className="modalStyle"
        style={{
          transform: modalState ? "translateY(0)" : "translateY(-100vh)",
          opacity: modalState ? "1" : "0",
        }}
      >
        {props.children}
      </div>
    </>
  );
};

export default Modal;
