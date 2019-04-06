package com.suveen.react.todoapp.service;

import com.suveen.react.todoapp.database.domain.Todo;
import java.util.List;

public interface TodoService {

  List<Todo> findAll();

  Todo deleteById(Long id);

  Todo findById(Long id);

  Todo save(Todo todo);

  //  List<Todo> findAll(String username);
}
