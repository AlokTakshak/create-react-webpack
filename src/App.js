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
      <div>
        <h1>Hello World!</h1>
        <h2>{`Count : ${this.state.count}`}</h2>
        <button
          onClick={() => {
            this.setState(state => ({ count: state.count + 1 }));
          }}
        >
          +
        </button>
        <button
          onClick={() => {
            this.setState(state => ({ count: state.count - 1 }));
          }}
        >
          -
        </button>
      </div>
    );
  }
}

export default hot(module)(App);
