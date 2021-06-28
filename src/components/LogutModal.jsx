import React, { useContext } from "react";

import { ModalContext } from "../context/modalContext";

const LogutModal = () => {
  const { modal, handleModal, modalContent } = useContext(ModalContext);

  return (
    <div>
      <h1>Log out</h1>
      <p>Are you sure you want to log out?</p>
      <button
        onClick={() => {
          console.log("logout");
          handleModal();
        }}
      >
        Yes
      </button>
      <button
        onClick={() => {
          handleModal();
        }}
      >
        No
      </button>
    </div>
  );
};

export default LogutModal;
