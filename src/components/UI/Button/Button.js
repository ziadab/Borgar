import React from "react";
import classes from "./Button.module.css";

export default props => {
  return (
    <button
      onClick={props.click}
      className={[classes.Button, classes[props.type]].join(" ")}
    >
      {props.children}
    </button>
  );
};
