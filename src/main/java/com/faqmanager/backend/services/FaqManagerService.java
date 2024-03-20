package com.faqmanager.backend.services;

import com.faqmanager.backend.model.FaqManager;

import java.util.List;

public interface FaqManagerService {

    FaqManager createFAQ(FaqManager faqManager);

    List<FaqManager> getAllFaqs();

    boolean deleteFaq(Long id);

    FaqManager getFaqById(Long id);

    FaqManager updateFaq(Long id, FaqManager faqManager);
}
