package com.ddebinski.app.product;

import com.ddebinski.app.category.ECategoryType;
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
import java.util.Set;
import java.util.stream.Stream;

@CrossOrigin(origins = "http://localhost:4200", maxAge = 3600)
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
        ResponseEntity<HttpStatus> responseEntity = validatePropertiesForCategory(product.getCategory().getCategoryType(), product.getProperties());

        if (responseEntity.getStatusCode().is2xxSuccessful()) {
            Optional<Product> result = repository.findById(product.getId());
            if (result.isPresent()) {
                Product domain = result.get();
                domain.setDateFrom(product.getDateFrom());
                domain.setDateTo(product.getDateTo());
                domain.setCategory(product.getCategory());
                domain.setPrice(product.getPrice());
                domain.setDescription(product.getDescription());
                domain.setLongDescription(product.getLongDescription());
                domain.setProducer(product.getProducer());
                domain.clearAllProperties();
                domain.addProperties(product.getProperties());
                repository.save(domain);

                return new ResponseEntity<>(HttpStatus.CREATED);
            } else {
                return ResponseEntity.notFound().build();
            }
        } else {
            return responseEntity;
        }
    }

    @PostMapping
    ResponseEntity<HttpStatus> save(@RequestBody @Valid Product product) {
        ResponseEntity<HttpStatus> responseEntity = validatePropertiesForCategory(product.getCategory().getCategoryType(), product.getProperties());

        if (responseEntity.getStatusCode().is2xxSuccessful()) {

            Product newProduct = new Product();
            newProduct.setDateFrom(product.getDateFrom());
            newProduct.setDateTo(product.getDateTo());
            newProduct.setPrice(product.getPrice());
            newProduct.setCategory(product.getCategory());
            newProduct.setDescription(product.getDescription());
            newProduct.setLongDescription(product.getLongDescription());
            newProduct.setProducer(product.getProducer());
            newProduct.addProperties(product.getProperties());

            repository.save(newProduct);

            return new ResponseEntity<>(HttpStatus.CREATED);
        } else {
            return responseEntity;
        }
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

    ResponseEntity validatePropertiesForCategory(ECategoryType categoryType, Set<ProductProperty> properties) {
        if (categoryType == null) {
            return ResponseEntity.badRequest().body("Category type is empty, fill it and try again.");
        }

        if (properties.isEmpty()) {
            return ResponseEntity.badRequest().body("Properties are empty, fill it and try again.");
        }

        Stream<EProperty> ePropertyStream = properties.stream()
                .map(ProductProperty::getName);

        boolean invalidate = false;
        if (categoryType.equals(ECategoryType.MOTHERBOARD)) {
            invalidate = ePropertyStream
                    .anyMatch(eProperty -> eProperty.equals(EProperty.CLOCK_SPEED)
                            || eProperty.equals(EProperty.CORE_COUNT)
                            || eProperty.equals(EProperty.CASE_TYPE)
                            || eProperty.equals(EProperty.MEMORY_CL)
                            || eProperty.equals(EProperty.MEMORY_COUNT)
                            || eProperty.equals(EProperty.POWER));
        } else if (categoryType.equals(ECategoryType.PROCESSOR)) {
            invalidate = ePropertyStream
                    .anyMatch(eProperty -> eProperty.equals(EProperty.CASE_TYPE)
                            || eProperty.equals(EProperty.MEMORY_CL)
                            || eProperty.equals(EProperty.POWER));
        } else if (categoryType.equals(ECategoryType.GRAPHICS_CARD)) {
            invalidate = ePropertyStream
                    .anyMatch(eProperty -> eProperty.equals(EProperty.CASE_TYPE)
                            || eProperty.equals(EProperty.MEMORY_CL)
                            || eProperty.equals(EProperty.POWER)
                            || eProperty.equals(EProperty.SOCKET));
        } else if (categoryType.equals(ECategoryType.MEMORY)) {
            invalidate = ePropertyStream
                    .anyMatch(eProperty -> eProperty.equals(EProperty.CLOCK_SPEED)
                            || eProperty.equals(EProperty.CORE_COUNT)
                            || eProperty.equals(EProperty.CASE_TYPE)
                            || eProperty.equals(EProperty.SOCKET)
                            || eProperty.equals(EProperty.POWER));
        }

        if (invalidate) {
            return ResponseEntity.badRequest().body("Invalidate properties for this category");
        } else {
            return ResponseEntity.ok().build();
        }
    }
}
