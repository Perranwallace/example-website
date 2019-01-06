import React from "react";

import withStyles from "@material-ui/core/styles/withStyles";

const styles = theme => ({
  footer: {
    flex: 0.05,
    background: "linear-gradient(to left, #c65825, #ce5d29 , #c65825)",
    display: "flex",
    "align-items": "center",
    padding: 10,
    color: "white"
  }
});

class CollaborationDialog extends React.Component {


  render() {

    const { classes } = this.props;

    return (
      <div className={classes.footer}>
        <label> This is my awesome footer!! </label>
      </div>
    );
  }
}

export default withStyles(styles)(CollaborationDialog);
