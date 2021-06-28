import React, { useContext, useEffect, useState } from "react";
import { getAProduct, getProducts } from "../redux/actions/productActions";
import { useDispatch, useSelector } from "react-redux";

import CalcModal from "../components/CalcModal";
import { ModalContext } from "../context/modalContext";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const { productId } = useParams();
  const { modal, handleModal, modalContent } = useContext(ModalContext);
  const [num, setNum] = useState(0);

  const dispatch = useDispatch();
  const selectedProduct = useSelector(
    (state) => state.allProducts.selectedProduct
  );

  useEffect(() => {
    dispatch(getAProduct(productId));
  }, []);
  return (
    <div>
      <br />
      <br />
      <br />
      <br />
      <button
        onClick={() => handleModal(<CalcModal num={num} setNum={setNum} />)}
      >
        Calculate
      </button>
      <h1>{num.toFixed(2)}</h1>
      <h1>{selectedProduct.title}</h1>
      <h1>{selectedProduct.description}</h1>
    </div>
  );
};

export default ProductDetail;
