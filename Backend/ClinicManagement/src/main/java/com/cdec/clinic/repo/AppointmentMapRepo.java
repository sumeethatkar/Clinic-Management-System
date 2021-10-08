package com.cdec.clinic.repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.cdec.clinic.model.Account;

public interface AppointmentMapRepo extends JpaRepository<Account, Integer> {
	@Query(value="select a from Account a where a.appointments is not EMPTY")
	List<Account> getAllAppoit();

	
	
}
