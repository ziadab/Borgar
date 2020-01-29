import React from "react";
import classes from "./Layout.module.css";
import Toolbar from "../Navigation/Toolbar/Toolbar";
import Sidebar from "../Navigation/SideDrawer/SideDrawer";

class Layout extends React.Component {
  state = {
    showSideDrawer: true
  };

  sideDrawCloseHandler = () => {
    this.setState({ showSideDrawer: false });
  };

  render() {
    return (
      <React.Fragment>
        <Toolbar />
        <Sidebar
          show={this.state.showSideDrawer}
          closed={this.sideDrawCloseHandler}
        />
        {/* <div>Toolbar, sidebare and other stuff</div> */}
        <main className={classes.Contain}>{this.props.children}</main>
      </React.Fragment>
    );
  }
}

export default Layout;
