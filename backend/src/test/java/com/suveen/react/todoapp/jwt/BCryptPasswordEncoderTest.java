package com.suveen.react.todoapp.jwt;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.junit.runners.JUnit4;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

@RunWith(JUnit4.class)
public class BCryptPasswordEncoderTest {

  @Test
  public void getEncryptedPassword() {
    BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
    String password = encoder.encode("password");
    System.out.println(password);
  }

}
