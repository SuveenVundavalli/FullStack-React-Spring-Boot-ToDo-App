import React, { Component } from "react";
import { Link } from "react-router-dom";
import HelloWorldService from "../../api/todo/HelloWorldService.js";

class WelcomeComponent extends Component {
  constructor(props) {
    super(props);
    this.retriveWelcomeMessage = this.retriveWelcomeMessage.bind(this);
    this.handleSuccessfulResponse = this.handleSuccessfulResponse.bind(this);
    this.handleErrorResponse = this.handleErrorResponse.bind(this);
    this.state = {
      welcomeMessage: ""
    };
  }

  render() {
    return (
      <>
        <h1>Welcome!</h1>
        <div className="container">
          Welcome {this.props.match.params.name}. You can manage your todo list
          at <Link to="/todos">my todos</Link>.
        </div>
        <div className="container">
          Click{" "}
          <button
            onClick={this.retriveWelcomeMessage}
            className="btn btn-primary"
          >
            here
          </button>{" "}
          to get customized welcome text.
        </div>
        <div className="container">{this.state.welcomeMessage}</div>
      </>
    );
  }
  retriveWelcomeMessage() {
    HelloWorldService.executeHelloWorldService()
      .then(response => this.handleSuccessfulResponse(response))
      .catch(error => this.handleErrorResponse(error));
    // .catch()
  }
  handleSuccessfulResponse(response) {
    this.setState({
      welcomeMessage: response.data
    });
  }
  handleErrorResponse(error) {
    let errorMessage = "";
    if (error.message) {
      errorMessage += error.message;
    }
    if (error.response && error.response.data) {
      errorMessage += error.response.data.message;
    }
    this.setState({
      welcomeMessage: errorMessage
    });
  }
}

export default WelcomeComponent;
