package com.cdec.clinic.repo;


import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;
import com.cdec.clinic.model.Doctor;



@Transactional
@Repository
public interface DoctorRepository extends JpaRepository<Doctor, Integer> 
{
	@Modifying
	@Query(value="update Doctor doct set doct.specialization = ?1, doct.qualification = ?2, doct.experience = ?3, doct.fees = ?4 where doct.dr_id= ?5")
	void updateDoctor(String specialization, String qualification, String experience, Double fees, int dr_id);
	
	@Query(value="select u,d from Users u inner join Doctor d on u.u_id = d.dr_id ")
	List<Object> getDoctorInfo();
	
	
	
}

