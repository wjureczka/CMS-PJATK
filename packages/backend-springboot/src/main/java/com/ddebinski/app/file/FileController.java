package com.ddebinski.app.file;

import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.multipart.MultipartFile;

import java.util.Base64;

@Controller
@CrossOrigin("http://localhost:4200")
@RequestMapping("api/products/")
@AllArgsConstructor
public class FileController {

    private FileStorageService storageService;

    @PostMapping("{id}/upload")
    public ResponseEntity uploadFile(@PathVariable Long id, @RequestParam("file") MultipartFile file) {
        String message = "";
        try {
            storageService.store(id, file);

            message = "Uploaded the file successfully: " + file.getOriginalFilename();
            return ResponseEntity.status(HttpStatus.OK).body(message);
        } catch (Exception e) {
            message = "Could not upload the file: " + file.getOriginalFilename() + "!";
            return ResponseEntity.status(HttpStatus.EXPECTATION_FAILED).body(message);
        }
    }

    @GetMapping("{id}/base64-file")
    public ResponseEntity<String> getBase64File(@PathVariable Long id) {
        FileDB file = storageService.getFileByProductId(id);
        byte[] fileData = file.getData();

        String encodedString = Base64.getEncoder().encodeToString(fileData);

        return ResponseEntity.status(HttpStatus.OK).body(encodedString);
    }
}
