package com.ddebinski.app.creator;

import com.ddebinski.app.category.Category;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class CreatorRequest {
    private Long processorId;
    private Long motherboardId;
    private Long graphicCardId;
    private Long ramId;
    private Long powerSupplyId;
    private Long computerCaseId;

    private Category category;
}
