package com.faqmanager.backend.repository;

import com.faqmanager.backend.entity.FaqManagerEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface FaqManagerRepository extends JpaRepository<FaqManagerEntity,Long> {


}
