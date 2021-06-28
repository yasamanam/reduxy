import { useState } from "react";

export const useModalHook = () => {
  const [modal, setModal] = useState(false);
  const [modalContent, setModalContent] = useState("");

  const handleModal = (content) => {
    console.log(content);
    setModal(!modal);
    if (content) {
      setModalContent(content);
    }
  };

  let btn = <button>hi</button>;

  return { modal, modalContent, handleModal, btn };
};
