import React, { createContext } from "react";

import Modal from "../components/Modal";
import { useModalHook } from "../hooks/modalHook";

let ModalContext;
let { Provider } = (ModalContext = createContext());

let ModalProvider = ({ children }) => {
  const { modal, modalContent, handleModal } = useModalHook();

  return (
    <Provider value={{ modal, modalContent, handleModal }}>
      <Modal />
      {children}
    </Provider>
  );
};

export { ModalContext, ModalProvider };
