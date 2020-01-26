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
      <h3>Your Order</h3>
      <p> Pika pika</p>
      <ul>{ingredientSummary}</ul>
      <div style={{ textAlign: "center" }}>
        <Button click={null}>CANCEL</Button>
        <Button click={null} type="Purchase">
          PURCHASE
        </Button>
      </div>
    </React.Fragment>
  );
};
