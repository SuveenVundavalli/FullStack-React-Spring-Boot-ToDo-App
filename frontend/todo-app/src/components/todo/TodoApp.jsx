import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

class TodoApp extends Component {
  render() {
    return (
      <div className="TodoApp">
        <Router>
          <Switch>
            <Route path="/" exact component={LoginComponent} />
            <Route path="/login" component={LoginComponent} />
            <Route path="/welcome/:name" component={WelcomeComponent} />
            <Route path="/todos" component={ListTodosComponent} />
            <Route component={ErrorComponent} />
          </Switch>
        </Router>
      </div>
    );
  }
}

class LoginComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "admin",
      password: "",
      hasLoginFailed: false,
      showSuccessMessage: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.loginClicked = this.loginClicked.bind(this);
  }
  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }
  loginClicked() {
    // admin, password
    if (this.state.username === "admin" && this.state.password === "password") {
      this.props.history.push(`/welcome/${this.state.username}`);
      //   this.setState({ showSuccessMessage: true });
      //   this.setState({ hasLoginFailed: false });
    } else {
      this.setState({ showSuccessMessage: false });
      this.setState({ hasLoginFailed: true });
    }
    console.log(this.state);
  }

  render() {
    return (
      <div className="LoginComponent">
        {this.state.hasLoginFailed && <div>Invalid Credentials</div>}
        {this.state.showSuccessMessage && <div>Login Successful</div>}
        Username:
        <input
          type="text"
          name="username"
          value={this.state.username}
          onChange={this.handleChange}
        />
        Password:
        <input
          type="password"
          name="password"
          value={this.state.password}
          onChange={this.handleChange}
        />
        <button onClick={this.loginClicked}>Login</button>
      </div>
    );
  }
}

class ListTodosComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        {
          id: 1,
          description: "Learn Dance",
          done: false,
          targetDate: new Date()
        },
        {
          id: 2,
          description: "Become an expert at dance",
          done: false,
          targetDate: new Date()
        },
        {
          id: 3,
          description: "Go to Srilanka",
          done: false,
          targetDate: new Date()
        }
      ]
    };
  }

  render() {
    return (
      <div className="ListTodosComponent">
        <h1>List Todos</h1>
        <table>
          <thead>
            <tr>
              <th>id</th>
              <th>description</th>
              <th>Done</th>
              <th>Target Date</th>
            </tr>
          </thead>
          <tbody>
            {this.state.todos.map(todo => (
              <tr>
                <td>{todo.id}</td>
                <td>{todo.description}</td>
                <td>{todo.done.toString()}</td>
                <td>{todo.targetDate.toString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

class WelcomeComponent extends Component {
  render() {
    return (
      <div>
        Welcome {this.props.match.params.name}!. You can manage your todos{" "}
        <Link to="/todos">here</Link>.
      </div>
    );
  }
}

function ErrorComponent() {
  return (
    <div>
      An Error Occured. I don't know what happened, please contact me at{" "}
      <a href="mailto:contact@suveen.me">contact@suveen.me</a>
    </div>
  );
}

export default TodoApp;
