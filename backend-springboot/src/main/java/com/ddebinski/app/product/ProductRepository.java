package com.ddebinski.app.product;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ProductRepository extends JpaRepository<Product, Long> {

    boolean existsByCategoryCategoryId(Long id);

    List<Product> findByCategoryCategoryId(Long categoryId);
}
