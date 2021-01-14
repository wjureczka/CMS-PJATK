package com.ddebinski.app.producer;

import com.ddebinski.app.product.Product;
import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.ConstraintViolationException;
import javax.validation.Valid;
import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "http://localhost:4200", maxAge = 3600)
@RestController
@RequestMapping("/api/producers")
@AllArgsConstructor(access = AccessLevel.PACKAGE)
public class ProducerController {
    private final ProducerRepository repository;


    @GetMapping
    ResponseEntity<List<Producer>> getProducers() {
        return ResponseEntity.ok(repository.findAll());
    }

    @PostMapping
    ResponseEntity<Producer> addProducer(@RequestBody Producer producerRequest) {
        Producer newProducer = new Producer();
        newProducer.setProducerName(producerRequest.getProducerName());

        Producer savedProducer = repository.save(newProducer);

        return new ResponseEntity<>(savedProducer, HttpStatus.CREATED);
    }

    @DeleteMapping("/{id}")
    ResponseEntity<HttpStatus> delete(@PathVariable Long id) {
        try {
            repository.deleteById(id);
            return ResponseEntity.noContent().build();
        } catch (ConstraintViolationException e) {
            return new ResponseEntity(e, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PutMapping
    ResponseEntity<HttpStatus> update(@RequestBody @Valid Producer producerRequest) {
        Optional<Producer> producer = repository.findById(producerRequest.getProducerId());

        if (producer.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }

        Producer producerToEdit = producer.get();

        producerToEdit.setProducerName(producerRequest.getProducerName());

        repository.save(producerToEdit);

        return new ResponseEntity<>(HttpStatus.OK);
    }
}
