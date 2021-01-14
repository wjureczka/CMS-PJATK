package com.ddebinski.app.producer;

import lombok.*;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;

@Entity
@NoArgsConstructor(access = AccessLevel.PUBLIC)
@AllArgsConstructor(access = AccessLevel.PACKAGE)
@Getter
@Setter
public class Producer {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long producerId;

    @NotBlank
    private String producerName;

}
