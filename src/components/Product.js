import React from 'react';

function Product({ product, addProductToCart }) {
  return (
    <div className="card" style={{ width: '15rem' }}>
      <img
        src={product.imageURL}
        className="card-img-top"
        alt={product.name}
        width="250px"
        height="300px"
      />
      <div className="card-img-overlay">
        <h5 className="card-title">{product.name}</h5>
      </div>
      <hr />

      <div className="info">
        <p className="price">Rs {product.price}</p>
        <button className="button" onClick={() => addProductToCart(product)}>
          Add to cart
        </button>
      </div>
    </div>
  );
}

export default Product;
