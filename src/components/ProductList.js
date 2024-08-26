import React from "react";
import Product from "./Product";

function ProductList({ data, cartOnClick }) {
  return (
    <div className="container">
      <div className="row justify-content-center">
        {data.map((product) => (
          <div className="col-md-4 col-sm-12" key={product.id}>
            <Product product={product} cartOnClick={cartOnClick} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
