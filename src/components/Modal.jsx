import React, { useContext } from "react";

import { ModalContext } from "../context/modalContext";
import ReactDOM from "react-dom";

const Modal = ({ ...props }) => {
  const { modal, handleModal, modalContent } = useContext(ModalContext);

  if (modal) {
    return ReactDOM.createPortal(
      <div className="modal">{modalContent}</div>,
      document.querySelector("#modal-root")
    );
  } else {
    return null;
  }
};

export default Modal;
