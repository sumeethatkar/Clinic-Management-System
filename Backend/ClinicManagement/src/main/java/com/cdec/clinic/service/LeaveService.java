package com.cdec.clinic.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cdec.clinic.model.Leave;
import com.cdec.clinic.repo.LeaveRepo;


@Service
public class LeaveService {
	@Autowired
	LeaveRepo leaveRepo;

	public List<Leave> getAllLeaves() {
		
		return leaveRepo.findAll();
	}

	public Leave save(Leave q) {
		return leaveRepo.save(q);
	}
}
