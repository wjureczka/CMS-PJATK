package com.ddebinski.app.category;

import com.ddebinski.app.product.ProductRepository;
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

@CrossOrigin(origins = "http://localhost:4200", maxAge = 3600)
@RestController
@RequestMapping("/api/categories")
@AllArgsConstructor(access = AccessLevel.PACKAGE)
class CategoryController {
    private final CategoryRepository repository;
    private final ProductRepository productRepository;

    @GetMapping
    ResponseEntity<List<Category>> getCategories() {
        return ResponseEntity.ok(repository.findAll());
    }

    @GetMapping(path = "/{id}")
    ResponseEntity<Category> getCategoryById(@PathVariable Long id) {
        Optional<Category> result = repository.findById(id);
        return result.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PostMapping
    ResponseEntity<HttpStatus> save(@RequestBody @Valid Category category) {
        repository.save(category);
        return new ResponseEntity<>(HttpStatus.CREATED);
    }

    @PutMapping
    ResponseEntity<HttpStatus> update(@RequestBody @Valid Category category) {
        Optional<Category> result = repository.findById(category.getCategoryId());
        if (result.isPresent()) {
            Category domain = result.get();
            domain.setCategoryType(category.getCategoryType());
            repository.save(domain);

            return new ResponseEntity<>(HttpStatus.CREATED);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping(path = "/{id}")
    ResponseEntity delete(@PathVariable Long id) {
        try {
            boolean existsFrachts = productRepository.existsByCategoryCategoryId(id);
            if (existsFrachts) {
                return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Istnieją powiązane produkty dla tej kategorii");
            }
            repository.deleteById(id);
            return ResponseEntity.noContent().build();
        } catch (ConstraintViolationException e) {
            return new ResponseEntity(e, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

}
