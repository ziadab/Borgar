import React from "react";
import classes from "./Logo.module.css";
import BurgarLogo from "../../assets/images/bargar.png";

export default props => {
  return (
    <div className={classes.Logo}>
      <img src={BurgarLogo} alt="My BARGAR" />
    </div>
  );
};
