import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import ProductComponent from "./ProductComponent";
import { getAllProducts } from "../api/products";
import { setProducts } from "../redux/actions/productActions.js";

const ProductListing = () => {
  const products = useSelector((state) => state.allProducts);
  const dispatch = useDispatch();

  useEffect(() => {
    getAllProducts().then((res) => {
      console.log("res", res.data);
      dispatch(setProducts(res.data));
    });
  }, []);

  // console.log(products);
  return (
    <div className="ui grid container">
      <ProductComponent />
    </div>
  );
};

export default ProductListing;
