package com.ddebinski.app.product;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Collection;
import java.util.List;

@Repository
public interface ProductRepository extends JpaRepository<Product, Long> {

    boolean existsByCategoryCategoryId(Long id);

    List<Product> findByCategoryCategoryId(Long categoryId);

    List<Product> findByCategoryCategoryIdIn(Collection<Long> categoryId);

    Page<Product> findAll(Pageable pageable);
}
