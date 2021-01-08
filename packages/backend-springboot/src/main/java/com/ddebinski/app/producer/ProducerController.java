package com.ddebinski.app.producer;

import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@CrossOrigin(origins = "http://localhost:4200", maxAge = 3600)
@RestController
@RequestMapping("/api/producers")
@AllArgsConstructor(access = AccessLevel.PACKAGE)
public class ProducerController {
    private final ProducerRepository repository;


    @GetMapping
    ResponseEntity<List<Producer>> getProducts() {
        return ResponseEntity.ok(repository.findAll());
    }
}
