import React, { Component } from 'react';
import logo from './images/logo.svg';
//import './App.css';
import PropTypes from "prop-types";

import Header from './Header.js';
import Footer from './Footer.js';

import withStyles from "@material-ui/core/styles/withStyles";

const styles = theme => ({
  content: {
    display: "flex",
    "flex-direction": "column",
    height: "100vh",
  //  width: "100vw"
  //backgroundColor: "purple"
  },
  fullScreenContent: {
  //  width: "100%",
    display: "flex",
    flex: 0.9,
    //height: "100%"
  }
});

class App extends Component {
  static propTypes = {
    classes: PropTypes.object.isRequired
  };

  render() {

    const { classes } = this.props;

    return (
      <div className={classes.content}>
        <Header/>
        <FullScreenContent classes={classes}>
          <div className="App">
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <p>
                Edit <code>src/App.js</code> and save to reload.
              </p>
              <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                Learn React
              </a>
            </header>
          </div>
        </FullScreenContent>
        <Footer/>
      </div>
    );
  }
}

class FullScreenContent extends Component {
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
