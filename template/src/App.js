import React, { Component } from "react";
import { hot } from "react-hot-loader";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  render() {
    return (
      <div className="app">
        <h1>Hello World!</h1>
        <h2>{`Count : ${this.state.count}`}</h2>
        <div>
          <button
            className="button"
            onClick={() => {
              this.setState(state => ({ count: state.count + 1 }));
            }}
          >
            +
          </button>
          <button
            className="button"
            onClick={() => {
              this.setState(state => ({ count: state.count - 1 }));
            }}
          >
            -
          </button>
        </div>
      </div>
    );
  }
}

export default hot(module)(App);
