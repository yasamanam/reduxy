import React, { useContext } from "react";

import LogutModal from "../components/LogutModal";
import { ModalContext } from "../context/modalContext";

const Header = () => {
  const { modal, handleModal, modalContent } = useContext(ModalContext);

  const handleClick = () => {
    handleModal(<LogutModal />);
  };

  return (
    <div className="ui grid fixed menu">
      <div className="ui grid container center">
        <h2>Fake</h2>
        <button onClick={handleClick}>Logout</button>
      </div>
    </div>
  );
};

export default Header;
