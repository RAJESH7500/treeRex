import React, { useEffect, useState } from 'react';
import Filter from './components/Filter';
import Product from './components/Product';
import { filterData } from './constant';
import { updateFilterData } from './utills/commonUtils';

function Home({ addProductToCart }) {
  const [data, setData] = useState([]);
  const [dataCopy, setDataCopy] = useState([]);
  const [filters, setFilters] = useState(filterData);
  const [searchText, setSearchText] = useState('');
  const [showFilter, setShowFilter] = useState(() =>
    window.innerWidth <= 768 ? false : true
  );
  const fetchProducts = async () => {
    const response = await fetch(
      'https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/catalogue.json'
    );
    const products = await response.json();
    setData(products);
    setDataCopy(products);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const addFilter = (key, item) => {
    const filtersClone = { ...filters };
    filtersClone[key].forEach((filter) => {
      if (filter.name === item.name) {
        filter.isActive = !filter.isActive;
      }
    });
    setFilters(filtersClone);
  };

  const handleSearch = () => {
    if (searchText.length) {
      const filteredData = dataCopy.filter(
        (product) =>
          product.type.toLowerCase().includes(searchText.toLocaleLowerCase()) ||
          product.name.toLowerCase().includes(searchText.toLocaleLowerCase())
      );
      setData(filteredData);
    }
  };
  useEffect(() => {
    const filteredData = updateFilterData(filters, dataCopy);
    setData(filteredData);
  }, [filters]);

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
          <img
            src="./search-icon-2.png"
            alt="search icon"
            width="35px"
            height="35px"
          />
        </span>
        <span className="filter-icon" onClick={() => setShowFilter(true)}>
          <img
            src="./filter-icon.png"
            alt="filter icon"
            width="30px"
            height="30px"
          />
        </span>
      </div>
      <div className="container-home">
        <div className=" col-25">
          <Filter
            filters={filters}
            addFilter={addFilter}
            isOpen={showFilter}
            setIsOpen={setShowFilter}
          />
        </div>
        <div className="list col-75 card-container">
          {data.length > 0 ? (
            <>
              {data.map((product) => (
                <Product
                  product={product}
                  addProductToCart={addProductToCart}
                  key={product.id}
                />
              ))}
            </>
          ) : (
            <p className="text-center">No products found..!</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Home;
