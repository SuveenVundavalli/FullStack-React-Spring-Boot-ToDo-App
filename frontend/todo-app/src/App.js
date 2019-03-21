import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        Hello, world!
        <FirstComponent />
        <SecondComponent />
        <ThirdComponent />
      </div>
    );
  }
}

// Class Component
class FirstComponent extends Component {
  render() {
    return <div className="firstComponent">First Component</div>;
  }
}

class SecondComponent extends Component {
  render() {
    return <div className="secondComponent">Second Component</div>;
  }
}

// Function Component

function ThirdComponent() {
  return (
    <div className="thirdComponent">Third Component</div>
  );
}

export default App;
