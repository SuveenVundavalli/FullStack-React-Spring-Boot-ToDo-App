import React, { Component } from "react";
import moment from "moment";
import TodoDataService from "../../api/todo/TodoDataService.js";
import AuthenticationService from "./AuthenticationService.js";

class ListTodosComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      message: null
    };
    this.deleteTodoClicked = this.deleteTodoClicked.bind(this);
    this.updateTodoClicked = this.updateTodoClicked.bind(this);
    this.refreshTodos = this.refreshTodos.bind(this);
    this.addTodoClicked = this.addTodoClicked.bind(this);
  }

  componentDidMount() {
    this.refreshTodos();
  }

  render() {
    return (
      <div className="ListTodosComponent">
        <h1>List Todos</h1>
        {this.state.message && (
          <div className="alert alert-success">{this.state.message}</div>
        )}
        <div className="container">
          <table className="table table-striped">
            <thead>
              <tr>
                <th>description</th>
                <th>Done</th>
                <th>Target Date</th>
                <th>Update</th>
                <th />
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {this.state.todos.map(todo => (
                <tr key={todo.id}>
                  <td>{todo.description}</td>
                  <td>{todo.done.toString()}</td>
                  <td>{moment(todo.targetDate).format("YYYY-MM-DD")}</td>
                  <td
                    className="btn btn-success"
                    onClick={() => this.updateTodoClicked(todo.id)}
                  >
                    Update
                  </td>
                  <td />
                  <td
                    className="btn btn-warning"
                    onClick={() => this.deleteTodoClicked(todo.id)}
                  >
                    Delete
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="row">
            <div className="btn btn-success" onClick={this.addTodoClicked}>
              Add
            </div>
          </div>
        </div>
      </div>
    );
  }

  deleteTodoClicked(id) {
    let username = AuthenticationService.getLoggedInUsername();
    TodoDataService.deleteTodo(username, id)
      .then(response => {
        this.setState({ message: `Delete of todo ${id} Successful!` });
        this.refreshTodos();
      })
      .catch(error =>
        this.setState({ message: `Delete of todo ${id} Failed!` })
      );
  }

  updateTodoClicked(id) {
    this.props.history.push(`/todos/${id}`);
  }

  addTodoClicked() {
    this.props.history.push("/todos/-1");
  }

  refreshTodos() {
    let username = AuthenticationService.getLoggedInUsername();
    TodoDataService.retriveAllTodos(username).then(response =>
      this.setState({ todos: response.data })
    );
  }
}

export default ListTodosComponent;
