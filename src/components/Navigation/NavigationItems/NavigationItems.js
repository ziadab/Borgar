import React from "react";
import classes from "./NavigationItems.module.css";
import NavigationItem from "./NavigationItem/NavigationItem";

export default props => {
  return (
    <ul className={classes.NavigationItems}>
      <NavigationItem link="/" active>
        Burgar Builder
      </NavigationItem>
      <NavigationItem link="/checkout">Checkout</NavigationItem>
    </ul>
  );
};
