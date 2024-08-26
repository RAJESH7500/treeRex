import "./App.css";
import React from "react";
import Home from "./Home";
import Header from "./components/Header";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Checkout from "./components/Checkout";
function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="App">
          <Header />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/checkout">
              <Checkout />
            </Route>
          </Switch>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
