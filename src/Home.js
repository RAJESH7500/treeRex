import React, { useState } from 'react';
import Filter from './components/Filter';
import ProductList from './components/ProductList';
import Header from './components/Header';
import { connect } from 'react-redux';
function Home({ products }) {
  const [data, setData] = useState(products);
  const [fdata, setfData] = useState([products]);
  const [cart, setCart] = useState([]);
  const [color, setColor] = useState({
    red: false,
    blue: false,
    green: false,

    men: false,
    women: false,

    first: 0,
    second: 0,
    third: 0,

    polo: false,
    hoodie: false,
    basic: false,
  });
  const check = (cart, item) => {
    for (let i = 0; i < cart.length; i++) {
      if (cart.nam === item.name) return true;
    }
    return false;
  };
  const cartOnClick = (item) => {
    console.log('cart onClick called');
    if (check(cart, item)) {
      cart.forEach((p) => {
        if (p.name === item.name) p.quantity += 1;
      });
    } else setCart([...cart, item]);
  };
  const filterItem = () => {
    const newItem = products.filter((pro) => {
      const color1 = pro.color;
      const type = pro.type;
      // const price = pro.price.toLowerCase();
      // const gender = pro.gender.toLowerCase();
      const colorCond =
        (color.red && color1.includes('Red')) ||
        (color.blue && color1.includes('Blue')) ||
        (color.green && color1.includes('Green'));
      const typeCond =
        (color.polo && type.includes('Polo')) ||
        (color.hoodie && type.includes('Hoodie')) ||
        (color.basic && type.includes('Basic'));
      return colorCond && typeCond;
    });
    setData(newItem);
    console.log('apply called');
    console.log('color is ', color);
  };

  console.log('data is ', data);
  return (
    <div className="home">
      <div className="row justify-content-end">
        <div className="col-md-9 col-sm-12">
          <div className="row justify-content-center">
            <div className="col-auto search">
              <input
                type="search"
                placeholder="Search for product"
                className="searchBar"
              />
              <span className="searchIcon">
                <i class="fa fa-search" aria-hidden="true"></i>
              </span>
              <span className="filterIcon d-md-none">
                <i className="fa-solid fa-filter"></i>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-3">
            <div className="d-none d-sm-block filter">
              <Filter
                filterItem={filterItem}
                color={color}
                setColor={setColor}
              />
            </div>
          </div>
          <div className="col-md-9 col-sm-12">
            {data.length > 0 ? (
              <ProductList data={data} cartOnClick={cartOnClick} />
            ) : (
              <p className="text-center">No products found..!</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    products: state.products,
  };
};

export default connect(mapStateToProps)(Home);
