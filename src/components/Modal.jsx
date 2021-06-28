import React, { useContext } from "react";

import { ModalContext } from "../context/modalContext";
import ReactDOM from "react-dom";

const Modal = ({ ...props }) => {
  const { modal, handleModal, modalContent } = useContext(ModalContext);

  if (modal) {
    return ReactDOM.createPortal(
      <div onClick={() => handleModal()} className="modal__backdrop">
        <div onClick={(e) => e.stopPropagation()} className="modal">
          <button onClick={() => handleModal()}>CLOSE</button>
          {modalContent}
        </div>
      </div>,
      document.querySelector("#modal-root")
    );
  } else {
    return null;
  }
};

export default Modal;
