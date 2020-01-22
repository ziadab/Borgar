import React from "react";
import Burger from "../../components/Burger/Burger";
export default class BurgerBuilder extends React.Component {
  state = {
    ingredients: {
      salad: 0,
      cheese: 0,
      meat: 0,
      bacon: 0
    }
  };

  render() {
    return (
      <React.Fragment>
        <Burger ingredients={this.state.ingredients} />
        <h2>Bossa</h2>
      </React.Fragment>
    );
  }
}
