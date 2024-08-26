import React from "react";

function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <a className="navbar-brand" href="/">
          TeeRex Store
        </a>

        <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
          <li className="nav-item active">
            <a className="nav-link" href="#products">
              Products <span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/checkout">
              <i class="fa fa-shopping-cart fa-lg" aria-hidden="true"></i>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;
