import React from "react";
import NavigationItem from "../NavigationItems/NavigationItem/NavigationItem";
import Logo from "../../Logo/Logo";
import classes from "./SideDrawer.module.css";

export default props => {
  return (
    <div className={classes.SideDrawer}>
      <div className={classes.Logo}>
        <Logo />
      </div>

      <nav>
        <NavigationItem>Bossa l5ot</NavigationItem>
        <NavigationItem>League of BARGAAr</NavigationItem>
      </nav>
    </div>
  );
};
