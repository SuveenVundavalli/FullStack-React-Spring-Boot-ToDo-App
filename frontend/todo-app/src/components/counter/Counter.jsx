import React, { Component } from "react";
import PropTypes from "prop-types";
import "./Counter.css";

class Counter extends Component {
  // Define the initial state in a constructor
  constructor() {
    super();
    this.state = {
      counter: 0
    };

    this.increment = this.increment.bind(this);
  }

  render() {
    return (
      <div className="counter">
        <button onClick={this.increment}>+{this.props.by}</button>
        <span className="count">{this.state.counter}</span>
      </div>
    );
  }

  // Update state - counter++
  increment() {
    this.setState({
      counter: this.state.counter + this.props.by
    });
  }
}

// default values
Counter.defaultProps = {
  by: 1
};

// validations
Counter.propTypes = {
  by: PropTypes.number
};

export default Counter;
