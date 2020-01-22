import React from "react";
import Burger from "../../components/Burger/Burger";
import BurgerControls from "../../components/Burger/BuildControles/BuildControls";

const INGREFIENT_PRICE = {
  salad: 0.3,
  cheese: 0.7,
  meat: 1.3,
  bacon: 0.7
};

export default class BurgerBuilder extends React.Component {
  state = {
    ingredients: {
      salad: 0,
      cheese: 0,
      meat: 0,
      bacon: 0
    },
    totalPrice: 4
  };

  removeIngredient = type => {
    if (this.state.ingredients[type] <= 0) {
      return;
    }
    const updatedCount = this.state.ingredients[type] - 1;
    const updatedIngredient = {
      ...this.state.ingredients
    };
    updatedIngredient[type] = updatedCount;
    const newPrice = this.state.totalPrice - INGREFIENT_PRICE[type];
    this.setState(oldState => {
      this.setState({ ingredients: updatedIngredient, totalPrice: newPrice });
    });
  };

  addIngredient = type => {
    const updatedCount = this.state.ingredients[type] + 1;
    const updatedIngredient = {
      ...this.state.ingredients
    };
    updatedIngredient[type] = updatedCount;
    const newPrice = this.state.totalPrice + INGREFIENT_PRICE[type];
    this.setState(oldState => {
      this.setState({ ingredients: updatedIngredient, totalPrice: newPrice });
    });
  };

  render() {
    return (
      <React.Fragment>
        <Burger ingredients={this.state.ingredients} />
        <BurgerControls
          AddIngredient={this.addIngredient}
          removeIngredient={this.removeIngredient}
        />
      </React.Fragment>
    );
  }
}
