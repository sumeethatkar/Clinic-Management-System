package com.cdec.clinic.model;

import java.io.Serializable;
import java.util.Date;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.PrimaryKeyJoinColumn;
import javax.persistence.SecondaryTable;
import javax.persistence.Table;


@Entity
@Table(name="users")
@SecondaryTable(name = "account", pkJoinColumns = @PrimaryKeyJoinColumn(name = "user_id"))
public class Users implements Serializable {
	
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "u_id")
	private int u_id;
	
	@Column
	private String email;
	
	@Column
	private String password;
	
	@Column(name = "fname", table = "account")
	private String  fname;
	
	@Column(name = "lname", table = "account")
	private String lname;
	
	@Column(name = "contact_no", table = "account")
	private String contact_no;
	
	@Column(name = "address", table = "account")
	private String address;
	
	@Column(name = "gender", table = "account")
	private String gender;
	
	@Column(name = "dob", table = "account")
	private Date dob;
	
	@Column(name = "role_id", table = "account")
	private int role_id;
	

	public Users(int u_id, String email, String password, String fname, String lname, String address) {
		super();
		this.u_id = u_id;
		this.email = email;
		this.password = password;
		this.fname = fname;
		this.lname = lname;
		this.address = address;
	}
	
	
	public Users(int u_id, String email, String password, String fname, String lname, String contact_no, String address,
			String gender, Date dob, int role_id) {
		super();
		this.u_id = u_id;
		this.email = email;
		this.password = password;
		this.fname = fname;
		this.lname = lname;
		this.contact_no = contact_no;
		this.address = address;
		this.gender = gender;
		this.dob = dob;
		this.role_id = role_id;
	}


	public Users(String email, String password) {
		super();
		this.email = email;
		this.password = password;
	}

	public Users() {
		super();
	}

	public int getU_id() {
		return u_id;
	}

	public void setU_id(int u_id) {
		this.u_id = u_id;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getFname() {
		return fname;
	}

	public void setFname(String fname) {
		this.fname = fname;
	}

	public String getLname() {
		return lname;
	}

	public void setLname(String lname) {
		this.lname = lname;
	}

	public String getContact_no() {
		return contact_no;
	}

	public void setContact_no(String contact_no) {
		this.contact_no = contact_no;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public String getGender() {
		return gender;
	}

	public void setGender(String gender) {
		this.gender = gender;
	}

	public Date getDob() {
		return dob;
	}

	public void setDob(Date dob) {
		this.dob = dob;
	}

	public int getRole_id() {
		return role_id;
	}

	public void setRole_id(int role_id) {
		this.role_id = role_id;
	}

	@Override
	public String toString() {
		return "Users [u_id=" + u_id + ", email=" + email + ", password=" + password + ", fname=" + fname + ", lname="
				+ lname + ", contact_no=" + contact_no + ", address=" + address + ", gender=" + gender + ", dob=" + dob
				+ ", role_id=" + role_id + "]";
	}
	
}	