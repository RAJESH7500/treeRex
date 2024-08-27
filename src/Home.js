import React, { useEffect, useState } from 'react';
import Filter from './components/Filter';
import ProductList from './components/ProductList';
import { connect } from 'react-redux';
import { filterData } from './constant';
import { createPortal } from 'react-dom';
function Home({ products }) {
  const [data, setData] = useState(products);
  const [filters, setFilters] = useState(filterData);
  const [cart, setCart] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [showFilter, setShowFilter] = useState(false);
  const addFilter = (key, item) => {
    const filtersClone = { ...filters };
    filtersClone[key].forEach((filter) => {
      if (filter.name === item.name) {
        filter.isActive = !filter.isActive;
      }
    });
    setFilters(filtersClone);
  };

  const check = (cart, item) => {
    for (let i = 0; i < cart.length; i++) {
      if (cart.nam === item.name) return true;
    }
    return false;
  };
  const cartOnClick = (item) => {
    if (check(cart, item)) {
      cart.forEach((p) => {
        if (p.name === item.name) p.quantity += 1;
      });
    } else setCart([...cart, item]);
  };

  const updateFilterData = () => {
    const colors = filters['color']
      .filter((item) => item.isActive)
      .map((item) => item.value);
    const gender = filters['gender']
      .filter((item) => item.isActive)
      .map((item) => item.value);
    const price = filters['price']
      .filter((item) => item.isActive)
      .map((item) => item.value);
    const type = filters['type']
      .filter((item) => item.isActive)
      .map((item) => item.value);
    let filteredData = products;
    if (colors.length) {
      filteredData = products.filter((product) =>
        colors.includes(product.color.toLowerCase())
      );
    }
    if (gender.length) {
      filteredData = products.filter((product) =>
        gender.includes(product.gender.toLowerCase())
      );
    }
    if (type.length) {
      filteredData = products.filter((product) =>
        type.includes(product.type.toLowerCase())
      );
    }
    if (price.length) {
      let min = 0,
        max = 0;
      min = Number(price[0].split('-')[0]);
      max = Number(price.at(-1).split('-')[1]);
      if (!max) max = Number.MAX_SAFE_INTEGER;
      filteredData = products.filter(
        (product) => product.price >= min && product.price <= max
      );
    }
    setData(filteredData);
  };

  const handleSearch = () => {
    if (searchText.length) {
      const filteredData = products.filter(
        (product) =>
          product.type.toLowerCase().includes(searchText.toLocaleLowerCase()) ||
          product.name.toLowerCase().includes(searchText.toLocaleLowerCase())
      );
      setData(filteredData);
    }
  };
  useEffect(() => {
    updateFilterData();
  }, [filters]);
  console.log('show filter value is ', showFilter);
  return (
    <div className="home">
      <div className="search">
        <input
          type="search"
          placeholder="Search for product"
          className="searchBar"
          name="search"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <span
          className="search-icon search-button-container"
          onClick={handleSearch}
        >
          <img src="./search-icon-2.png" width="35px" height="35px" />
        </span>
        <span className="filter-icon" onClick={() => setShowFilter(true)}>
          <img src="./filter-icon.png" width="30px" height="30px" />
        </span>
      </div>
      <div className="container-home">
        <div className="filter col-25">
          <Filter filters={filters} addFilter={addFilter} />
        </div>
        <div className="list col-75 card-container">
          {data.length > 0 ? (
            <ProductList data={data} cartOnClick={cartOnClick} />
          ) : (
            <p className="text-center">No products found..!</p>
          )}
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
