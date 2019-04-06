package com.suveen.react.todoapp.service.impl;

import com.suveen.react.todoapp.database.domain.Todo;
import com.suveen.react.todoapp.repository.TodoRepository;
import com.suveen.react.todoapp.service.TodoService;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;

@Service("todoService")
public class TodoServiceImpl implements TodoService {

  @Autowired private TodoRepository todoRepository;

  @Override
  public List<Todo> findAll(String username) {
    return todoRepository.findByUsername(username);
  }

  @Override
  public Todo deleteById(Long id) {

    Todo todo = findById(id);
    if (StringUtils.isEmpty(todo)) {
      return null;
    }
    todoRepository.deleteById(id);
    return todo;
  }

  @Override
  public Todo findById(Long id) {
    return todoRepository.findById(id).get();
  }

  @Override
  public Todo save(Todo todo) {
    return todoRepository.save(todo);
  }
}
