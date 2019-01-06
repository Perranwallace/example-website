import React from "react";

import withStyles from "@material-ui/core/styles/withStyles";

const styles = theme => ({
  footer: {
    flex: 0.05,
    background: "linear-gradient(to left, #c65825, #ff9b5e , #c65825)",
    //width: "100%",
    display: "flex",
    padding: 10
  }
});

class CollaborationDialog extends React.Component {


  render() {

    const { classes } = this.props;

    return (
      <div className={classes.footer}>
        <label> hi </label>
      </div>
    );
  }
}

export default withStyles(styles)(CollaborationDialog);
