import React, { useEffect } from "react";
import { getAProduct, getProducts } from "../redux/actions/productActions";
import { useDispatch, useSelector } from "react-redux";

import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const { productId } = useParams();
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
      <h1>{selectedProduct.title}</h1>
      <h1>{selectedProduct.description}</h1>
    </div>
  );
};

export default ProductDetail;
