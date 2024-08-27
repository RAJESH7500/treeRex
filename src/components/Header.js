import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

function Header({ count }) {
  return (
    <nav className="navbar">
      <div className="container">
        <Link className="navbar-brand" to="/">
          TeeRex Store
        </Link>
        <ul className="right-nav">
          <li className="nav-item active">Products</li>
          <li className="nav-item">
            <Link className="nav-link" to="/cart">
              <span className="cart-count">{count}</span>
              <img src="cart.png" alt="cart icon" width="40px" height="40px" />
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;
