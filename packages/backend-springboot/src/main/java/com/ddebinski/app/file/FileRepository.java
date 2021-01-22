package com.ddebinski.app.file;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface FileRepository extends JpaRepository<FileDB, String> {

    List<FileDB> findByProductId(Long productId);

}
