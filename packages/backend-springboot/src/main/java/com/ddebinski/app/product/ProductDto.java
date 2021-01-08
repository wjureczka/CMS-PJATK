package com.ddebinski.app.product;

import com.ddebinski.app.category.Category;
import com.ddebinski.app.producer.Producer;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.CascadeType;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.validation.constraints.Min;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import java.util.HashSet;
import java.util.Set;

@NoArgsConstructor(access = AccessLevel.PUBLIC)
@AllArgsConstructor(access = AccessLevel.PACKAGE)
@Getter
@Setter
@Builder
public class ProductDto {

    private Long id;

    private String description;

    private String longDescription;

    private Long price;

    private Category category;

    private Producer producer;

    @JsonIgnoreProperties("product")
    private Set<ProductProperty> properties = new HashSet<>();

    private boolean compatible;

    public static ProductDto map(Product product) {
        return builder()
                .id(product.getId())
                .description(product.getDescription())
                .longDescription(product.getLongDescription())
                .price(product.getPrice())
                .category(product.getCategory())
                .producer(product.getProducer())
                .properties(product.getProperties())
                .build();
    }
}
