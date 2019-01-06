import React from "react";

import withStyles from "@material-ui/core/styles/withStyles";
import logo from './images/logo.svg';
import './App.css';

const styles = theme => ({

});

class TempContent extends React.Component {

  render() {
    const { classes } = this.props;

    return (
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
    );
  }
}

export default withStyles(styles)(TempContent);
