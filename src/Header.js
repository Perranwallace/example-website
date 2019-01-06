import React from "react";

import withStyles from "@material-ui/core/styles/withStyles";

const styles = theme => ({
  header: {
    flex: 0.05,
    background: "linear-gradient(to left, #c65825, #ce5d29 , #c65825)",
    display: "flex",
    //"justify-content": "center",
    "align-items": "center",
    padding: 10,
    color: "white"
  }
});

class Header extends React.Component {


  render() {
    const { classes } = this.props;

    return (
      <div className={classes.header}>
        <label> Hello there and welcome to my website! </label>
      </div>
    );
  }
}

export default withStyles(styles)(Header);
