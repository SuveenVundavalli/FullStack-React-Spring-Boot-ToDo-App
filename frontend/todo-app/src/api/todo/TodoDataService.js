import axios from "axios";
import { JPA_API_URL } from "../../Constants.js";

class TodoDataService {

  createTodo(name, todo) {
    return axios.post(`${JPA_API_URL}/users/${name}/todos/`, todo);
  }
  updateTodo(name, id, todo) {
    return axios.put(`${JPA_API_URL}/users/${name}/todos/${id}`, todo);
  }
  retriveTodo(name, id) {
    return axios.get(`${JPA_API_URL}/users/${name}/todos/${id}`);
  }
  retriveAllTodos(name) {
    return axios.get(`${JPA_API_URL}/users/${name}/todos`);
  }
  deleteTodo(name, id) {
    return axios.delete(`${JPA_API_URL}/users/${name}/todos/${id}`);
  }
}

export default new TodoDataService();
