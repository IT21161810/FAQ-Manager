package com.faqmanager.backend.controller;

import com.faqmanager.backend.model.FaqManager;
import com.faqmanager.backend.services.FaqManagerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

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
    @DeleteMapping("/faqs/{id}")
    public ResponseEntity<Map<String,Boolean>> deleteFaq(@PathVariable Long id){
        boolean deleted = false;
        deleted = faqManagerService.deleteFaq(id);
        Map<String,Boolean> response = new HashMap<>();
        response.put("deleted",deleted);
        return ResponseEntity.ok(response);
    }
}
