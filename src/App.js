import React, { Component } from "react";
import { Route, HashRouter, Routes } from "react-router-dom";

import Home from './screen/Home'
import ProductDetail from "./screen/ProductDetail";
import HomeStore from "./screen/HomeStore";
import ProductList from './screen/ProductList'

class App extends Component {
  componentDidUpdate() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <HashRouter onUpdate={() => window.scrollTo(0, 0)}>
        <div>
          <Routes>
            {/* HOME PAGE */}
            <Route exact path="/*" element={<Home />} />
            {/* PRODUCT LIST WHEN USER SEARCHING */}
            <Route exact path="/Product-List" element={<ProductList />}>
              <Route exact path=":keyword" element={<ProductList />} />
            </Route>
            {/* PRODUCT DETAIL */}
            <Route exact path="/Product-Detail" element={<ProductDetail />}>
              <Route exact path=":id" element={<ProductDetail />} />
            </Route>
            {/* HOME STORE */}
            <Route exact path="/Store" element={<HomeStore />} />
          </Routes>
        </div>
      </HashRouter>
    );
  }
}

export default App;
