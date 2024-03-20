package com.faqmanager.backend.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class FaqManager {
    private long id;
    private String question;
    private String category;
    private String status;
}
