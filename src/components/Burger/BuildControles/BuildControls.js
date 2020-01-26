import React from "react";
import BuildControl from "./BuildControl/BuildControl";
import classes from "./BuildControls.module.css";

export default props => {
  const control = [
    { label: "Salad", type: "salad" },
    { label: "Meat", type: "meat" },
    { label: "Cheese", type: "cheese" },
    { label: "Bacon", type: "bacon" }
  ];

  return (
    <div className={classes.BuildControls}>
      <p>
        Total Price: <strong>{props.price.toFixed(2)} $</strong>
        {console.log(props.purchasable)}
      </p>
      {control.map(ctrl => {
        return (
          <BuildControl
            key={ctrl.label}
            label={ctrl.label}
            added={() => {
              props.AddIngredient(ctrl.type);
            }}
            removed={() => {
              props.removeIngredient(ctrl.type);
            }}
            disable={props.disableInfo[ctrl.type]}
          />
        );
      })}
      <button
        className={classes.OrderButton}
        disabled={!props.purchasable}
        onClick={props.order}
      >
        ORDER NOW
      </button>
    </div>
  );
};
