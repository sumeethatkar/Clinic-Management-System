package com.cdec.clinic.repo;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.cdec.clinic.model.Leave;

@Transactional
@Repository
public interface LeaveRepo extends JpaRepository<Leave, Integer> {

}
