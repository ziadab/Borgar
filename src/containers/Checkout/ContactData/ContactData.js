import React from "react";

import classes from "./ContactData.module.css";

class ContactData extends React.Component {
  state = {
    name: "",
    email: ""
  };

  render() {
    return (
      <div className={classes.ContactData}>
        <h4>POST UR DAATATATAAAA !!!!</h4>
        <form>
          <input type="text" name="email" placeholder="UR EMAIL" />
          <input type="text" name="name" placeholder="UR NAME" />
          <button>ORDER NOOOOW</button>
        </form>
      </div>
    );
  }
}

export default ContactData;
