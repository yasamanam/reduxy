import { Link } from "react-router-dom";
import React from "react";
import { useSelector } from "react-redux";

const ProductComponent = () => {
  const products = useSelector((state) => state.allProducts.products);
  const renderList = products.map((product) => {
    return (
      <div key={product.id} className="four column wide">
        <Link to={`/product/${product.id}`}>
          <div className="ui link cards">
            <div className="card">
              <div className="image">
                <img src={product.image} alt="Product image" />
              </div>
              <div className="content">
                <div className="header">{product.title}</div>
                <div className="meta price">$ {product.price}</div>
                <div className="meta">{product.category}</div>
              </div>
            </div>
          </div>
        </Link>
      </div>
    );
  });

  return <div className=" four  wide column">{renderList}</div>;
};

export default ProductComponent;
