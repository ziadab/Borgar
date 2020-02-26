import React from "react";
import { Route } from "react-router-dom";

import CheckOutSummury from "../../components/Order/CheckOutSummury/CheckOutSummury";
import ContactData from "./ContactData/ContactData";

class Checkout extends React.Component {
  state = {
    ingredients: {
      salad: 1,
      cheese: 1,
      meat: 1,
      bacon: 1
    }
  };

  componentDidMount() {
    const query = new URLSearchParams(this.props.location.search);
    const ingredients = {};
    for (let i of query.entries()) {
      console.log(i);
      ingredients[i[0]] = +i[1];
    }
    //console.log(ingredients);
    this.setState({ ingredients: ingredients });
  }

  cancel = () => {
    this.props.history.goBack();
  };

  purchase = () => {
    this.props.history.replace("/checkout/contactData");
  };

  render() {
    console.log(this.props);
    return (
      <div>
        <CheckOutSummury
          ingredients={this.state.ingredients}
          cancel={this.cancel}
          purchase={this.purchase}
        />
        <Route
          path={this.props.match.path + "/contactData"}
          component={ContactData}
        />
      </div>
    );
  }
}

export default Checkout;
