import React from "react";
import { Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import BurgerBuilder from "./containers/BurgerBuilder/BurgerBuilder";
import CheckOut from "./containers/Checkout/Checkout";
function App() {
  return (
    <Layout>
      <Route path="/" exact component={BurgerBuilder} />
      <Route path="/checkout" component={CheckOut} />
    </Layout>
  );
}

export default App;
