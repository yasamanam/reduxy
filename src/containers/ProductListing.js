import React, { useEffect } from "react";

import ProductComponent from "./ProductComponent";
import { getAllProducts } from "../api/products";
import { useSelector } from "react-redux";

const ProductListing = () => {
  const products = useSelector((state) => state.allProducts);

  useEffect(() => {
    getAllProducts().then((res) => console.log("res", res));
  }, []);

  // console.log(products);
  return (
    <div className="ui grid container">
      <ProductComponent />
    </div>
  );
};

export default ProductListing;
