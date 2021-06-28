import React, { useContext, useState } from "react";

import { ModalContext } from "../context/modalContext";

const CalcModal = ({ setNum, num, ...props }) => {
  const { modal, handleModal, modalContent } = useContext(ModalContext);
  const [count, setCount] = useState(num);

  return (
    <div>
      <h1>Log out</h1>
      <p>Add a number</p>
      <input
        placeholder="Write a number"
        type="number"
        value={count}
        onChange={(e) => setCount(Number(e.target.value))}
      />
      <button
        onClick={() => {
          setNum(count);
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

export default CalcModal;
