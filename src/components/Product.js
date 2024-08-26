import React from "react";

function Product({ product, cartOnClick }) {
  return (
    <div className="product">
      <div className="card" style={{ width: "15rem" }}>
        <img
          src={product.imageURL}
          className="card-img-top"
          alt={product.name}
        />
        <div className="card-img-overlay">
          <h5 className="card-title">{product.name}</h5>
        </div>
        <hr />

        <div className="info">
          <p className="price">Rs {product.price}</p>
          <a
            type="button"
            className="btn btn-dark"
            // onClick={cartOnClick(product)}
          >
            Add to cart
          </a>
        </div>
      </div>
    </div>
  );
}

export default Product;