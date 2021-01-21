package com.ddebinski.app.file;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface FileRepository extends JpaRepository<FileDB, String> {

    FileDB findByProductId(Long productId);

}
