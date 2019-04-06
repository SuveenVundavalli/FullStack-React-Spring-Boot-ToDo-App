package com.suveen.react.todoapp.rest.jwt.resource;

import java.io.Serializable;

public class JwtTokenRequest implements Serializable {

  private static final long serialVersionUID = -5616176897013108345L;

  private String username;
  private String password;
  /*
  {
      "token": "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJpbjI4bWludXRlcyIsImV4cCI6MTU1NTEzMDM4NiwiaWF0IjoxNTU0NTI1NTg2fQ.5VBjS9-pN_Plk4GxlYFy_W1fcenK5f1AqG1X4T9cT9qWlp3H1F30GZbeH4Kgrjp_QY6gZVKJ9e66oKMboENH5g"
  }
  */
  public JwtTokenRequest() {
    super();
  }

  public JwtTokenRequest(String username, String password) {
    this.setUsername(username);
    this.setPassword(password);
  }

  public String getUsername() {
    return this.username;
  }

  public void setUsername(String username) {
    this.username = username;
  }

  public String getPassword() {
    return this.password;
  }

  public void setPassword(String password) {
    this.password = password;
  }
}
