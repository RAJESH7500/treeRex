import React from 'react';
function Checkout({ cartProducts }) {
  const totalAmount = cartProducts.reduce(
    (total, product) => (total += product.price * product.productQuantity),
    0
  );
  return (
    <div className="checkout">
      <h1 className="mt-3">Shopping cart</h1>
      <div className="container checkout">
        {cartProducts.map((p) => (
          <div className="main" key={p.id}>
            <img src={p.imageURL} alt={p.name} width="100px" height="150px" />
            <div className="infoc">
              <p>{p.name}</p>
              <p>{p.price}</p>
            </div>
            <div className="form-row">
              <div className="form-group">
                <select className="form-control" name={p.name}>
                  <option defaultValue="Qty: 1">
                    Qty: {p.productQuantity}
                  </option>
                  <option value="1">Qty: 2</option>
                  <option value="2">Qty: 3</option>
                  <option value="3">Qty: 4</option>
                </select>
              </div>
            </div>
            <button type="button" className="btn btn-outline-secondary">
              Delete
            </button>
          </div>
        ))}
        {cartProducts.length ? <span className="border-bottom"></span> : null}
      </div>
      {cartProducts.length ? (
        <div className="cart-total">
          <h1>Total Amount</h1> <span>Rs {totalAmount}</span>
        </div>
      ) : null}
    </div>
  );
}

export default Checkout;
