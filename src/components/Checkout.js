import React, { useState } from "react";
import { PRODUCTS } from "../data/data";
function Checkout() {
  const [pro, setpro] = useState(PRODUCTS);
  return (
    <div className="checkout">
      <h3 className="m3">Shopping cart</h3>
      <div className="container">
        {pro.map((p) => (
          <div className="main" key={p.id}>
            <img src={p.imageURL} alt={p.name} width="100px" height="150px" />
            <div className="infoc">
              <p>{p.name}</p>

              <p>{p.price}</p>
            </div>
            <div className="form-row">
              <div className="form-group">
                <select className="form-control" name="city">
                  <option defaultValue="Qty: 1">Qty: 1</option>
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
      </div>
    </div>
  );
}

export default Checkout;
