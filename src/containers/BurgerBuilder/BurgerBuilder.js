import React from "react";
import Burger from "../../components/Burger/Burger";
import BurgerControls from "../../components/Burger/BuildControles/BuildControls";
import OrderSummury from "../../components/Burger/OderSummury/OrderSummury";
import Modal from "../../components/UI/Modal/Modal";
import axios from "../../Requests/axios_orders";
import Spinner from "../../components/UI/Spinner/Spinner";
import withErrorHandler from "../../HOC/withErrorHandler/withErrorHandler";

const INGREFIENT_PRICE = {
  salad: 0.3,
  cheese: 0.7,
  meat: 1.3,
  bacon: 0.7
};

class BurgerBuilder extends React.Component {
  componentDidMount() {
    axios
      .get("https://bargar-110dc.firebaseio.com/ingredients.json")
      .then(res => {
        this.setState({ ingredients: res.data });
      })
      .catch(err => {
        this.setState({ error: err });
      });
  }

  // State
  state = {
    ingredients: null,
    totalPrice: 4,
    purchase: false,
    purchasing: false,
    loading: false,
    error: null
  };

  // All Methods
  purchaseOp = () => {
    //alert("Bossa a 3amo");
    // this.setState({ loading: true });

    // const order = {
    //   ingredients: this.state.ingredients,
    //   totalPrice: this.state.totalPrice
    // };

    // axios
    //   .post("/orders.json", order)
    //   .then(res => {
    //     this.setState({ loading: false, purchasing: false });
    //     //console.log(res);
    //     //alert("Bossa a 3amo");
    //   })
    //   .catch(err => {
    //     this.setState({ loading: false, purchasing: false });
    //     console.log(err);
    //   });
    const queryParams = [];

    for (let i in this.state.ingredients) {
      queryParams.push(
        `${encodeURIComponent(i)}=${encodeURIComponent(
          this.state.ingredients[i]
        )}`
      );
    }

    const queryString = queryParams.join("&");

    this.props.history.push({
      pathname: "/checkout",
      search: "?" + queryString
    });
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

  // Render Stuff
  render() {
    let orderSummury = null;

    if (this.state.loading) {
      orderSummury = <Spinner />;
    }

    const disableInfo = {
      ...this.state.ingredients
    };
    for (let key in disableInfo) {
      disableInfo[key] = disableInfo[key] <= 0;
    }
    let burgur = <Spinner />;

    if (this.state.ingredients) {
      orderSummury = (
        <OrderSummury
          totalPrice={this.state.totalPrice}
          cancelThatShit={this.closeModal}
          contuniePurchase={this.purchaseOp}
          ingredients={this.state.ingredients}
        />
      );
      burgur = (
        <React.Fragment>
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

    return (
      <React.Fragment>
        <Modal show={this.state.purchasing} closeModal={this.closeModal}>
          {orderSummury}
        </Modal>
        {burgur}
      </React.Fragment>
    );
  }
}

export default withErrorHandler(BurgerBuilder, axios);
