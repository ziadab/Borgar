import React from "react";
import Burger from "../../components/Burger/Burger";
import BurgerControls from "../../components/Burger/BuildControles/BuildControls";
import OrderSummury from "../../components/Burger/OderSummury/OrderSummury";
import Modal from "../../components/UI/Modal/Modal";

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
    totalPrice: 4,
    purchase: false,
    purchasing: false
  };

  closeModal = () => {
    this.setState({ purchasing: false });
  };

  purchasingHandler = () => {
    this.setState({ purchasing: true });
  };

  updatePurchase = () => {
    const ingredients = {
      ...this.state.ingredients
    };
    const sum = Object.keys(ingredients)
      .map(key => {
        return ingredients[key];
      })
      .reduce((sum, el) => {
        return sum + el;
      }, 0);

    this.setState({ purchase: sum > 0 });
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

    this.setState(
      { ingredients: updatedIngredient, totalPrice: newPrice },
      () => {
        this.updatePurchase();
      }
    );
  };

  addIngredient = type => {
    const updatedCount = this.state.ingredients[type] + 1;
    const updatedIngredient = {
      ...this.state.ingredients
    };
    updatedIngredient[type] = updatedCount;
    const newPrice = this.state.totalPrice + INGREFIENT_PRICE[type];

    this.setState(
      { ingredients: updatedIngredient, totalPrice: newPrice },
      () => {
        this.updatePurchase();
      }
    );
  };

  render() {
    const disableInfo = {
      ...this.state.ingredients
    };
    for (let key in disableInfo) {
      disableInfo[key] = disableInfo[key] <= 0;
    }

    return (
      <React.Fragment>
        <Modal show={this.state.purchasing} closeModal={this.closeModal}>
          <OrderSummury ingredients={this.state.ingredients} />
        </Modal>
        <Burger ingredients={this.state.ingredients} />
        <BurgerControls
          AddIngredient={this.addIngredient}
          removeIngredient={this.removeIngredient}
          disableInfo={disableInfo}
          price={this.state.totalPrice}
          purchasable={this.state.purchase}
          order={this.purchasingHandler}
        />
      </React.Fragment>
    );
  }
}
