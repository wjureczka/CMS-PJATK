package com.ddebinski.app.creator;

import com.ddebinski.app.category.ECategoryType;
import com.ddebinski.app.product.EProperty;
import com.ddebinski.app.product.Product;
import com.ddebinski.app.product.ProductDto;
import com.ddebinski.app.product.ProductRepository;
import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

import javax.persistence.EntityNotFoundException;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@CrossOrigin(origins = "http://localhost:4200", maxAge = 3600)
@RestController
@RequestMapping("/api/creator")
@AllArgsConstructor(access = AccessLevel.PACKAGE)
public class CreatorController {

    private final ProductRepository productRepository;

    @PostMapping
    public List<ProductDto> create(@RequestBody CreatorRequest creatorRequest) {

        Long requestCategoryId = creatorRequest.getCategory().getCategoryId();

        List<Product> requestProductList = productRepository.findByCategoryCategoryId(requestCategoryId);

        List<ProductDto> productDtos = requestProductList.stream()
                .map(product -> ProductDto.map(product))
                .collect(Collectors.toList());

        if (creatorRequest.getCategory().getCategoryType().equals(ECategoryType.MOTHERBOARD)) {
            if (creatorRequest.getProcessorId() != null) {
                Product processor = productRepository.findById(creatorRequest.getProcessorId()).orElseThrow(() -> new EntityNotFoundException());

                String processorSocket = processor.getProperties().stream()
                        .filter(property -> property.getName().equals(EProperty.SOCKET))
                        .findAny()
                        .get()
                        .getValue();

                productDtos.forEach(productDto -> {
                    String motherboardSocket = productDto.getProperties().stream()
                            .filter(property -> property.getName().equals(EProperty.SOCKET))
                            .findAny()
                            .get()
                            .getValue();

                    if (processorSocket.equals(motherboardSocket)) {
                        productDto.setCompatible(true);
                    }
                });

            } else {
                productDtos.forEach(product -> product.setCompatible(true));
            }
        }

        return productDtos;
    }
}
