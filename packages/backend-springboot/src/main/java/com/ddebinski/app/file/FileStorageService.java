package com.ddebinski.app.file;

import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;
import org.springframework.web.multipart.MultipartFile;

import javax.transaction.Transactional;
import java.io.IOException;
import java.util.List;

@Service
@AllArgsConstructor
public class FileStorageService {

    private FileRepository fileRepository;

    public FileDB store(Long productId, MultipartFile file) throws IOException {
        String fileName = StringUtils.cleanPath(file.getOriginalFilename());
        FileDB FileDB = new FileDB(fileName, file.getContentType(), file.getBytes(), productId);

        return fileRepository.save(FileDB);
    }

    @Transactional
    public List<FileDB> getFileByProductId(Long productId) {
        return fileRepository.findByProductId(productId);
    }
}
