package com.suveen.react.todoapp.repository;

import com.suveen.react.todoapp.database.domain.Todo;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TodoRepository extends JpaRepository<Todo, Long> {

  List<Todo> findByUsername(String username);
}
