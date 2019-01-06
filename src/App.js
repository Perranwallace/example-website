import React, { Component } from 'react';

import PropTypes from "prop-types";

import Header from './Header.js';
import Footer from './Footer.js';

import withStyles from "@material-ui/core/styles/withStyles";
import TempContent from './TempContent.js';

const styles = theme => ({
  content: {
    display: "flex",
    "flex-direction": "column",
    height: "100vh",
  },
  fullScreenContent: {
    display: "flex",
    flex: 0.9,
    "overflow-y": "scroll"
  }
});

class App extends Component {
  /**
  *  The rendered app that contains all other content. Has a header, all content
  *  and footer.
  **/
  static propTypes = {
    classes: PropTypes.object.isRequired
  };

  render() {

    const { classes } = this.props;

    return (
      <div className={classes.content}>
        <Header/>
        <FullScreenContent classes={classes}>
          <TempContent/>
        </FullScreenContent>
        <Footer/>
      </div>
    );
  }
}

class FullScreenContent extends Component {
  /**
  *  This class sits between the <Header/> and <Footer/> and takes up 100%
  *  of the available space. All website content goes in here.
  **/
  static propTypes = {
    classes: PropTypes.object.isRequired,
    children: PropTypes.array.isRequired
  };

  render() {
    const { classes, children } = this.props;
    return (
      <div className={classes.fullScreenContent}>
        {children}
      </div>
    )
  }

}

export default withStyles(styles)(App);
