import React from "react";
import Backdrop from "../../components/Backdrop/Backdrop";

import "./Modal.css";

const Modal = (props) => {
  return (
    <>
      <Backdrop show={props.appear} click={props.closeModal} />
      <div
        className="modalStyle"
        style={{
          transform: props.appear ? "translateY(0)" : "translateY(-100vh)",
          opacity: props.appear ? "1" : "0",
        }}
      >
        {props.children}
      </div>
    </>
  );
};

export default Modal;
