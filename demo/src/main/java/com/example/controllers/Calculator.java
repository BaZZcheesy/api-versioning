package com.example.controllers;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequestMapping("/api")
public class Calculator {
    
    @CrossOrigin
    @GetMapping( value = "/")
    public String getIndex() {
        return "<h1>Hello World!</h1>";
    }
}
