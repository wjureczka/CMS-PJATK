package com.ddebinski.app.product;

import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.ConstraintViolationException;
import javax.validation.Valid;
import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/products")
@AllArgsConstructor(access = AccessLevel.PACKAGE)
public class ProductController {
    private final ProductRepository repository;

    @GetMapping
    ResponseEntity<List<Product>> getProducts() {
        return ResponseEntity.ok(repository.findAll());
    }

    @GetMapping(path = "/{id}")
    ResponseEntity<Product> getProductById(@PathVariable Long id) {
        Optional<Product> result = repository.findById(id);
        return result.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @GetMapping(path = "/category/{categoryId}")
    ResponseEntity<List<Product>> getProductByCategoryId(@PathVariable Long categoryId) {
        List<Product> result = repository.findByCategoryCategoryId(categoryId);
        return ResponseEntity.ok(result);
    }

    @PutMapping
    ResponseEntity<HttpStatus> update(@RequestBody @Valid Product product) {
        Optional<Product> result = repository.findById(product.getId());
        if (result.isPresent()) {
            Product domain = result.get();
            domain.setDateFrom(product.getDateFrom());
            domain.setDateTo(product.getDateTo());
            domain.setCategory(product.getCategory());
            domain.setPrice(product.getPrice());
            repository.save(domain);

            return new ResponseEntity<>(HttpStatus.CREATED);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @PostMapping
    ResponseEntity save(@RequestBody @Valid Product product) {
        repository.save(product);
        return new ResponseEntity<>(HttpStatus.CREATED);
    }

    @DeleteMapping(path = "/{id}")
    ResponseEntity<HttpStatus> delete(@PathVariable Long id) {
        try {
            repository.deleteById(id);
            return ResponseEntity.noContent().build();
        } catch (ConstraintViolationException e) {
            return new ResponseEntity(e, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}