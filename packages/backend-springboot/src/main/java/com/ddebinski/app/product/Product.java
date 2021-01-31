package com.ddebinski.app.product;

import com.ddebinski.app.category.Category;
import com.ddebinski.app.producer.Producer;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import javax.validation.constraints.Min;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import java.util.Set;
import java.util.HashSet;

@Entity
@NoArgsConstructor(access = AccessLevel.PUBLIC)
@AllArgsConstructor(access = AccessLevel.PACKAGE)
@Getter
@Setter
public class Product {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @NotBlank
    private String description;

    @NotBlank
    private String longDescription;

    @Min(1)
    @NotNull
    private Long price;

    @NotNull
    @ManyToOne
    @JoinColumn(name="category_id", nullable=false)
    private Category category;

    @ManyToOne
    @JoinColumn(name = "producer_id")
    private Producer producer;

    @OneToMany(
            mappedBy = "product",
            cascade = CascadeType.ALL
    )
    @JsonIgnoreProperties("product")
    private Set<ProductProperty> properties = new HashSet<>();

    @OneToMany(
            mappedBy = "product",
            cascade = CascadeType.ALL
    )
    @JsonIgnoreProperties("product")
    private Set<Translation> translations = new HashSet<>();

    public void addProperties(Set<ProductProperty> properties) {
        properties.forEach(this::addProperty);
    }

    public void addTranslations(Set<Translation> translations) {
        translations.forEach(this::addTranslation);
    }

    private void addProperty(ProductProperty property) {
        properties.add(property);
        property.setProduct(this);
    }

    private void addTranslation(Translation translation) {
        translations.add(translation);
        translation.setProduct(this);
    }

    public void removeProperty(ProductProperty property) {
        properties.remove(property);
        property.setProduct(null);
    }

    public void clearAllProperties() {
        this.properties.forEach(property -> property.setProduct(null));
        this.properties.clear();
    }

    public void clearAllTranslations() {
        this.translations.forEach(translation -> translation.setProduct(null));
        this.translations.clear();
    }
}
