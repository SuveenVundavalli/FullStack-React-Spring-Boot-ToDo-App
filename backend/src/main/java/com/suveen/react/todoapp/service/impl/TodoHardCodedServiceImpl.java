package com.suveen.react.todoapp.service.impl;

import com.suveen.react.todoapp.database.domain.Todo;
import com.suveen.react.todoapp.service.TodoService;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import org.springframework.stereotype.Service;

@Service
public class TodoHardCodedServiceImpl implements TodoService {

  private static List<Todo> todos = new ArrayList<>();
  private static Long idCounter = 0l;

  static {
    todos.add(new Todo(++idCounter, "admin", "Learn to dance", new Date(), false));
    todos.add(new Todo(++idCounter, "admin", "Learn about Micro Services", new Date(), false));
    todos.add(new Todo(++idCounter, "admin", "Learn React", new Date(), false));
  }

  @Override
  public List<Todo> findAll() {
    return todos;
  }

  @Override
  public Todo deleteById(Long id) {
    Todo todo = findById(id);
    if (todo == null || !todos.remove(todo)) {
      return null;
    }
    return todo;
  }

  @Override
  public Todo findById(Long id) {
    for (Todo todo : todos) {
      if (todo.getId() == id) {
        return todo;
      }
    }
    return null;
  }

  @Override
  public Todo save(Todo todo) {
    if (todo.getId() == null || todo.getId() == -1 || todo.getId() == 0) {
      todo.setId(++idCounter);
      todos.add(todo);
    } else {
      deleteById(todo.getId());
      todos.add(todo);
    }
    System.out.println(String.format("--> todo: %s", todo));
    return todo;
  }

  //  @Override
  //  public List<Todo> findAll(String username) {
  //    return todos.stream()
  //        .filter(todo -> todo.getUsername().equals(username))
  //        .collect(Collectors.toList());
  //  }
}
