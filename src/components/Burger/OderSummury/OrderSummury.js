import React from "react";
import Button from "../../UI/Button/Button";

export default props => {
  const ingredientSummary = Object.keys(props.ingredients).map(igKey => {
    return (
      <li key={igKey}>
        <span style={{ textTransform: "capitalize" }}>{igKey}</span>:{" "}
        {props.ingredients[igKey]}
      </li>
    );
  });

  return (
    <React.Fragment>
      <h3>
        Your Order: <strong>{props.totalPrice.toFixed(2)} $</strong>
      </h3>
      <p> Pika pika</p>
      <ul>{ingredientSummary}</ul>
      <div style={{ textAlign: "center" }}>
        <Button click={props.cancelThatShit}>CANCEL</Button>
        <Button click={props.contuniePurchase} type="Purchase">
          PURCHASE
        </Button>
      </div>
    </React.Fragment>
  );
};
