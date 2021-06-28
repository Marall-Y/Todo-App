import React from "react";

import Wrapper from "../../hoc/Wrapper";
import Backdrop from "../../components/Backdrop/Backdrop";

import "./Modal.css";

const Modal = (props) => {
  return (
    <Wrapper>
      <Backdrop show={props.show} click={props.closeModal} />
      <div
        className="modalStyle"
        style={{
          transform: props.show ? "translateY(0)" : "translateY(-100vh)",
          opacity: props.show ? "1" : "0",
        }}
      >
        {props.children}
      </div>
    </Wrapper>
  );
};

export default Modal;
