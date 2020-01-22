import React from "react";
import classes from "./Layout.module.css";

export default props => {
  return (
    <React.Fragment>
      <div>Toolbar, sidebare and other stuff</div>
      <main className={classes.Contain}>{props.children}</main>
    </React.Fragment>
  );
};
