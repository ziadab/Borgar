import React from "react";
import NavigationItem from "../NavigationItems/NavigationItem/NavigationItem";
import Logo from "../../Logo/Logo";
import classes from "./SideDrawer.module.css";
import Backdrop from "../../UI/Backdrop/Backdrop";

export default props => {
  let attachedClasses = [classes.SideDrawer, classes.Close];
  if (props.show) {
    attachedClasses = [classes.SideDrawer, classes.Open];
  }

  return (
    <React.Fragment>
      <Backdrop show={props.show} closeModal={props.closed} />
      <div className={attachedClasses.join(" ")}>
        <div className={classes.Logo}>
          <Logo />
        </div>

        <nav>
          <NavigationItem>Bossa l5ot</NavigationItem>
          <NavigationItem>League of BARGAAr</NavigationItem>
        </nav>
      </div>
    </React.Fragment>
  );
};
