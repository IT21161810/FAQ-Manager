package com.faqmanager.backend.services;

import com.faqmanager.backend.entity.FaqManagerEntity;
import com.faqmanager.backend.model.FaqManager;
import com.faqmanager.backend.repository.FaqManagerRepository;
import org.springframework.beans.BeanUtils;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class FaqManagerServiceImpl implements FaqManagerService {

    private FaqManagerRepository faqManagerRepository;

    public  FaqManagerServiceImpl(FaqManagerRepository faqManagerRepository){
        this.faqManagerRepository = faqManagerRepository;
    }
    @Override
    public FaqManager createFAQ(FaqManager faqManager) {
        FaqManagerEntity faqManagerEntity = new FaqManagerEntity();
        BeanUtils.copyProperties(faqManager,faqManagerEntity);
        faqManagerRepository.save(faqManagerEntity);

        return faqManager;
    }

    @Override
    public List<FaqManager> getAllFaqs() {
        List<FaqManagerEntity> faqManagerEntities = faqManagerRepository.findAll();

        List<FaqManager> faqManagers = faqManagerEntities
                .stream()
                .map(faq -> new FaqManager(
                  faq.getId(),
                  faq.getQuestion(),
                  faq.getCategory(),
                  faq.getStatus()))
                .collect(Collectors.toList());

        return faqManagers;
    }
}
