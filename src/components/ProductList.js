import React from 'react';
import Product from './Product';

function ProductList({ data, cartOnClick }) {
  return (
    <>
      {data.map((product) => (
        <Product product={product} cartOnClick={cartOnClick} key={product.id} />
      ))}
    </>
  );
}

export default ProductList;
