import React from "react";
import classes from "./Layout.module.css";
import Toolbar from "../Navigation/Toolbar/Toolbar";

export default props => {
  return (
    <React.Fragment>
      <Toolbar />
      {/* <div>Toolbar, sidebare and other stuff</div> */}
      <main className={classes.Contain}>{props.children}</main>
    </React.Fragment>
  );
};
