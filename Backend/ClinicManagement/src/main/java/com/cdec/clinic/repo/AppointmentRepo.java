package com.cdec.clinic.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.cdec.clinic.model.Appointments;


public interface AppointmentRepo extends JpaRepository<Appointments,Integer>{

}
