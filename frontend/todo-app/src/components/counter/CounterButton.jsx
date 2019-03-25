import React, { Component } from "react";
import PropTypes from "prop-types";

class CounterButton extends Component {
  render() {
    return (
      <div className="counterButton">
        <button onClick={() => this.props.incrementMethod(this.props.by)}>
          +{this.props.by}
        </button>
        <button onClick={() => this.props.decrementMethod(this.props.by)}>
          -{this.props.by}
        </button>
      </div>
    );
  }
}

// default values
CounterButton.defaultProps = {
  by: 1
};

// validations
CounterButton.propTypes = {
  by: PropTypes.number
};

export default CounterButton;
