import './App.css';
import React, { useState } from 'react';
import Home from './Home';
import Header from './components/Header';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Checkout from './components/Checkout';
function App() {
  const [cartProducts, setCartProducts] = useState([]);

  const addProductToCart = (product) => {
    const productsClone = [...cartProducts];
    const findProduct = productsClone.find(
      (item) => item.name === product.name
    );
    if (findProduct) findProduct.productQuantity += 1;
    else {
      product.productQuantity = 1;
      productsClone.push(product);
    }
    setCartProducts(productsClone);
  };

  return (
    <BrowserRouter>
      <div className="App">
        <Header count={cartProducts.length} />
        <Switch>
          <Route exact path="/">
            <Home addProductToCart={addProductToCart} />
          </Route>
          <Route path="/cart">
            <Checkout cartProducts={cartProducts} />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
