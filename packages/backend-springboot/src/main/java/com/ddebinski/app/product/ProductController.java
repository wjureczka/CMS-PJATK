package com.ddebinski.app.product;

import com.ddebinski.app.category.ECategoryType;
import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.ConstraintViolationException;
import javax.validation.Valid;
import javax.websocket.server.PathParam;
import java.util.List;
import java.util.Optional;
import java.util.Set;
import java.util.stream.Collectors;
import java.util.stream.Stream;

@CrossOrigin(origins = "http://localhost:4200", maxAge = 3600)
@RestController
@RequestMapping("/api/products")
@AllArgsConstructor(access = AccessLevel.PACKAGE)
public class ProductController {
    private final ProductRepository repository;
    private final SocketRepository socketRepository;

    @GetMapping
    ResponseEntity<List<Product>> getProducts() {
        return ResponseEntity.ok(repository.findAll());
    }

    @GetMapping("/sockets")
    ResponseEntity<List<SocketDictionary>> getSockets() {
        return ResponseEntity.ok(socketRepository.findAll());
    }

    @PostMapping("/sockets")
    ResponseEntity<HttpStatus> addSocket(@RequestBody SocketDictionary socketDictionary) {
        socketRepository.save(socketDictionary);
        return ResponseEntity.ok().build();
    }

    @GetMapping(path = "/{id}")
    ResponseEntity<ProductDto> getProductById(@PathVariable Long id, @PathParam("lang") String lang) {
        Optional<Product> result = repository.findById(id);
        if (result.isPresent()) {
            Set<Translation> translationList = result.get().getTranslations().stream()
                    .filter(translation -> translation.getLang().equals(lang))
                    .collect(Collectors.toSet());
            result.get().setTranslations(translationList);
        }

        return result.map(ProductDto::map).map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @GetMapping(path = "/{id}")
    ResponseEntity<Product> getProductById(@PathVariable Long id) {
        Optional<Product> result = repository.findById(id);
        return result.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @GetMapping("/")
    ResponseEntity<List<Product>> getProductByCategoryId(@RequestParam("categoryId") List<Long> categoryIds) {
        List<Product> result = repository.findByCategoryCategoryIdIn(categoryIds);
        return ResponseEntity.ok(result);
    }

    @PutMapping
    ResponseEntity<HttpStatus> update(@RequestBody @Valid Product product) {
        ResponseEntity<HttpStatus> responseEntity = validatePropertiesForCategory(product.getCategory().getCategoryType(), product.getProperties());

        if (responseEntity.getStatusCode().is2xxSuccessful()) {
            Optional<Product> result = repository.findById(product.getId());
            if (result.isPresent()) {
                Product domain = result.get();
                domain.setCategory(product.getCategory());
                domain.setPrice(product.getPrice());
                domain.setDescription(product.getDescription());
                domain.setLongDescription(product.getLongDescription());
                domain.setProducer(product.getProducer());
                domain.clearAllProperties();
                domain.addProperties(product.getProperties());
                domain.clearAllTranslations();
                domain.addTranslations(product.getTranslations());

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
            newProduct.setPrice(product.getPrice());
            newProduct.setCategory(product.getCategory());
            newProduct.setDescription(product.getDescription());
            newProduct.setLongDescription(product.getLongDescription());
            newProduct.setProducer(product.getProducer());
            newProduct.addProperties(product.getProperties());
            newProduct.addTranslations(product.getTranslations());

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
        } else if (categoryType.equals(ECategoryType.POWER_SUPPLY)) {
            invalidate = ePropertyStream
                    .anyMatch(eProperty -> eProperty.equals(EProperty.CLOCK_SPEED)
                            || eProperty.equals(EProperty.CORE_COUNT)
                            || eProperty.equals(EProperty.CASE_TYPE)
                            || eProperty.equals(EProperty.SOCKET)
                            || eProperty.equals(EProperty.MEMORY_CL)
                            || eProperty.equals(EProperty.MEMORY_COUNT));
        }


        if (invalidate) {
            return ResponseEntity.badRequest().body("Invalidate properties for this category");
        } else {
            return ResponseEntity.ok().build();
        }
    }
}
