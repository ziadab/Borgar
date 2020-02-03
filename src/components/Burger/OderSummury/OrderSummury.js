import React from "react";
import Button from "../../UI/Button/Button";

class OrderSummury extends React.Component {
  componentWillUpdate() {
    console.log("[OrderSummury.js] will Update uwu");
  }

  render() {
    const ingredientSummary = Object.keys(this.props.ingredients).map(igKey => {
      return (
        <li key={igKey}>
          <span style={{ textTransform: "capitalize" }}>{igKey}</span>:{" "}
          {this.props.ingredients[igKey]}
        </li>
      );
    });

    return (
      <React.Fragment>
        <h3>
          Your Order: <strong>{this.props.totalPrice.toFixed(2)} $</strong>
        </h3>
        <p> Pika pika</p>
        <ul>{ingredientSummary}</ul>
        <div style={{ textAlign: "center" }}>
          <Button click={this.props.cancelThatShit}>CANCEL</Button>
          <Button click={this.props.contuniePurchase} type="Purchase">
            PURCHASE
          </Button>
        </div>
      </React.Fragment>
    );
  }
}

export default OrderSummury;
