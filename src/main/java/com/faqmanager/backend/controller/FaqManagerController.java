package com.faqmanager.backend.controller;

import com.faqmanager.backend.model.FaqManager;
import com.faqmanager.backend.services.FaqManagerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("/api/v1")
public class FaqManagerController {
    @Autowired
    private FaqManagerService faqManagerService;

    public FaqManagerController(FaqManagerService faqManagerService) {
        this.faqManagerService = faqManagerService;
    }
    @PostMapping("/faqs")
    public FaqManager createFAQ(@RequestBody FaqManager faqManager){
        return faqManagerService.createFAQ(faqManager);
    }
    @GetMapping("/faqs")
    public List<FaqManager> getAllFaqs(){
        return faqManagerService.getAllFaqs();
    }
}
