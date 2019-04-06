package com.suveen.basic.auth.controller;

import com.suveen.basic.auth.model.AuthenticationBean;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class BasicAuthenticationController {

  @GetMapping("/basicauth")
  public AuthenticationBean login() {

    return new AuthenticationBean("You are authenticated");
  }
}
