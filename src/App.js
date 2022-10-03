import React, { Component } from "react";
import { Route, HashRouter, Routes } from "react-router-dom";

import Home from './screen/Home'
import ProductDetail from "./screen/ProductDetail";
import HomeStore from "./screen/HomeStore";

class App extends Component {
  componentDidUpdate() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <HashRouter onUpdate={() => window.scrollTo(0, 0)}>
        <div>
          <Routes>
            <Route exact path="/*" element={<Home />} />
            <Route exact path="/Product-Detail" element={<ProductDetail />}>
              <Route exact path=":id" element={<ProductDetail />} />
            </Route>
            <Route exact path="/Store" element={<HomeStore />} />
          </Routes>
        </div>
      </HashRouter>
    );
  }
}

export default App;
