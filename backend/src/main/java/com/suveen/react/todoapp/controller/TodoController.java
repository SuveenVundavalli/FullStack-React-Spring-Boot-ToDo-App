package com.suveen.react.todoapp.controller;

import com.suveen.react.todoapp.database.domain.Todo;
import com.suveen.react.todoapp.service.TodoService;
import java.net.URI;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class TodoController {

  @Qualifier("todoHardCodedService")
  @Autowired private TodoService todoHardCodedService;

  @GetMapping("/users/{username}/todos")
  public List<Todo> getAllTodos(@PathVariable String username) {

    return todoHardCodedService.findAll(username);
  }

  @GetMapping("/users/{username}/todos/{id}")
  public Todo getTodo(@PathVariable String username, @PathVariable Long id) {

    return todoHardCodedService.findById(id);
  }

  @PutMapping("/users/{username}/todos/{todoId}")
  public ResponseEntity<Todo> updateTodo(
      @PathVariable String username, @PathVariable Long todoId, @RequestBody Todo todo) {
    return new ResponseEntity<>(todoHardCodedService.save(todo), HttpStatus.OK);
  }

  @PostMapping("/users/{username}/todos")
  public ResponseEntity<Void> addTodo(@PathVariable String username, @RequestBody Todo todo) {
    Todo createdTodo = todoHardCodedService.save(todo);
    URI uri =
        ServletUriComponentsBuilder.fromCurrentRequest()
            .path("/{id}")
            .buildAndExpand(createdTodo.getId())
            .toUri();
    return ResponseEntity.created(uri).build();
  }

  @DeleteMapping("/users/{username}/todos/{id}")
  public ResponseEntity<Void> deleteTodo(@PathVariable String username, @PathVariable Long id) {
    if (todoHardCodedService.deleteById(id) != null) {
      return ResponseEntity.noContent().build();
    }
    return ResponseEntity.notFound().build();
  }
}
