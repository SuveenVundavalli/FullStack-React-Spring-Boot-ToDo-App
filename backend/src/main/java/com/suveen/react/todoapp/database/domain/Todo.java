package com.suveen.react.todoapp.database.domain;

import java.util.Date;
import java.util.Objects;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.validation.constraints.NotNull;

@Entity
public class Todo {

  @Id @GeneratedValue private Long id;

  @NotNull
  private String username;

  private String description;

  private Date targetDate;

  private Boolean isDone;

  public Todo() {}

  public Todo(Long id, String username, String description, Date targetDate, Boolean isDone) {
    this.id = id;
    this.username = username;
    this.description = description;
    this.targetDate = targetDate;
    this.isDone = isDone;
  }

  public Long getId() {
    return id;
  }

  public void setId(Long id) {
    this.id = id;
  }

  public String getUsername() {
    return username;
  }

  public void setUsername(String username) {
    this.username = username;
  }

  public String getDescription() {
    return description;
  }

  public void setDescription(String description) {
    this.description = description;
  }

  public Date getTargetDate() {
    return targetDate;
  }

  public void setTargetDate(Date targetDate) {
    this.targetDate = targetDate;
  }

  public Boolean getDone() {
    return isDone;
  }

  public void setDone(Boolean done) {
    isDone = done;
  }

  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    Todo todo = (Todo) o;
    return id.equals(todo.id);
  }

  @Override
  public int hashCode() {
    return Objects.hash(id);
  }

  @Override
  public String toString() {
    return "Todo{"
        + "id="
        + id
        + ", username='"
        + username
        + '\''
        + ", description='"
        + description
        + '\''
        + ", targetDate="
        + targetDate
        + ", isDone="
        + isDone
        + '}';
  }
}
