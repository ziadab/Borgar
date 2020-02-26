import React from "react";
import Burger from "../../Burger/Burger";
import Button from "../../UI/Button/Button";
import classes from "./CheckOutSummury.module.css";

const checkOutSummury = props => {
  return (
    <div className={classes.CheckOutSummury}>
      <h2>We hope u like it</h2>
      <div style={{ width: "100%", margin: "auto" }}>
        <Burger ingredients={props.ingredients} />
        <div style={{ marginTop: "25px" }}>
          <Button click={props.cancel}>CANCEL</Button>
          <Button click={props.purchase} type="Purchase">
            PURCHASE
          </Button>
        </div>
      </div>
    </div>
  );
};

export default checkOutSummury;
