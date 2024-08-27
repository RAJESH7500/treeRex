import React from 'react';
import './Header.css';

function Header() {
  return (
    <nav className="navbar">
      <div className="container">
        <a className="navbar-brand" href="/">
          TeeRex Store
        </a>

        <ul className="right-nav">
          <li className="nav-item active">
            <a className="nav-link" href="#products">
              Products
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/checkout">
              <img src="cart.png" width="40px" height="40px" />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;
