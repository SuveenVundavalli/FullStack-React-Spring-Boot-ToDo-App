import React, { Component } from "react";
import FirstComponent from "./components/learning-examples/FirstComponent";
import SecondComponent from "./components/learning-examples/SecondComponent";
import ThirdComponent from "./components/learning-examples/ThirdComponent";

class LearningComponents extends Component {
  render() {
    return (
      <div className="LearningComponent">
        Hello, world!
        <FirstComponent />
        <SecondComponent />
        <ThirdComponent />
      </div>
    );
  }
}

export default LearningComponents;
