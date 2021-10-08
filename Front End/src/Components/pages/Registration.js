import React, { useContext } from 'react';
//import './Login.css';
import Header from './homePageComponents/Header';
import { withRouter, Redirect } from 'react-router-dom';
import Cookies from 'universal-cookie';

class Registration extends React.Component{
      constructor(props)
      {
        super(props);
       
        this.state=
        {
          role_id:"",
          fname:"",
          lname:"",
          contact_no:"",
          address:"",
          gender:"",
          dob:"",
          email:"",
          password:"",
          errormessage:""
        }

        this.role_id=this.role_id.bind(this);
        this.fname=this.fname.bind(this);
        this.lname=this.lname.bind(this);
        this.contact_no=this.contact_no.bind(this);
        this.address=this.address.bind(this);
        this.gender=this.gender.bind(this);
        this.dob=this.dob.bind(this);
        this.email=this.email.bind(this);
        this.password=this.password.bind(this);
        this.register = this.register.bind(this);

      }

      role_id(event)
      {
        this.setState({role_id: event.target.value});
        console.log(event.target.value)
      }

      fname(event){
        this.setState({fname: event.target.value});
        console.log(event.target.value)
      }

      lname(event){
        this.setState({lname: event.target.value});
        console.log(event.target.value)
      }

      contact_no(event){
        this.setState({contact_no: event.target.value});
        console.log(event.target.value)
      }
      address(event){
        this.setState({address: event.target.value});
        console.log(event.target.value)
      }
      gender(event){
        this.setState({gender: event.target.value});
        console.log("gender"+event.target.value);
      }
      dob(event){
        this.setState({dob: event.target.value});
        console.log("dob"+event.target.value);
      }
      email(event){
        this.setState({email: event.target.value});
        console.log(event.target.value)
      }
      password(event){
        this.setState({password: event.target.value});
        console.log(event.target.value)
      }

      register(event){

        alert("Registered");
         const requestOptions={
           method:'POST',
           headers:{
             'Content-Type':'application/json'
           },
           body:JSON.stringify({
            email: this.state.email,
            password: this.state.password,
            fname: this.state.fname,
            lname: this.state.lname,
            contact_no: this.state.contact_no,
            address: this.state.address,
            gender: this.state.gender,
            dob: this.state.dob,
            role_id: this.state.role_id
           })
  
         
         };
         fetch("http://localhost:8080/auth/v1/registeration",requestOptions)
         .then(resp=>resp.text())
         .then(data=> {if(data.length != 0){
           
          const json = JSON.parse(data);
          if(json.role_id==2) 
          {
          const cookies = new Cookies();
          var dr_id =json.u_id;
          
          cookies.set('dr_id', dr_id,{path: '/'}); 
           this.props.history.push("/dr_registration");
          }
          else
          {
            this.props.history.push("/login");
          }
        }
       }); 
         
       }




  render(){
  
   return (
    <div>
        <Header />
      <section class="h-100 bg-dark">
  
  <div class="container py-5 h-100">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col">
        <div class="card card-registration my-4">
          <div class="row g-0">
            <div class="col-xl-6 d-none d-xl-block">
              <img
                src="https://mdbootstrap.com/img/Photos/new-templates/bootstrap-registration/img4.jpg"
                alt="Sample photo"
                class="img-fluid"
                style={{"border-top-left-radius": ".25rem","border-bottom-left-radius": ".25rem"}}
              />
            </div>

           
            <div class="col-xl-6">

            <form class="row g-3 needs-validation" novalidate>
              
              <div class="card-body p-md-5 text-black">
                <h3 class="mb-5 text-uppercase">Registration form</h3>
                
                
                <div class="row">
                  <div class="col-md-6 mb-4">
                <select class="select" value={this.state.role_id} onChange={this.role_id} >
                      <option value="0">Select User Type</option>
                      <option value="2">Doctor</option>
                      <option value="3">Patient</option>
                      
                    </select>
                    </div>
                    </div>
                 

                <div class="row">
                  <div class="col-md-6 mb-4">
                    <div class="form-outline">
                      <input type="text" id="validationCustom01" class="form-control form-control-lg" value={this.state.fname} onChange={this.fname} placeholder="First Name" />
                      
                    </div>
                   
                  </div>
                  

                  <div class="col-md-6 mb-4">
                    <div class="form-outline">
                      <input type="text" id="form3Example1n" class="form-control form-control-lg" value={this.state.lname} onChange={this.lname} required placeholder="Last Name"/>
                     
                      
                    </div>
                    
                  </div>
                
                  

                <div class="form-outline mb-4">
                  <input type="" id="form3Example8" class="form-control form-control-lg" value={this.state.contact_no} onChange={this.contact_no} required placeholder="Contact No"/>
                  
                  
                </div>
               

              </div>

                <div class="form-outline mb-4">
                  <input type="text" class="form-control form-control-lg" id="validationCustom031" value={this.state.address} onChange={this.address} required placeholder="Address"/>
                
                 
                </div>
             
                <div class="d-md-flex justify-content-start align-items-center mb-4 py-2">

                  <h6 class="mb-0 me-4">Gender: </h6>

                  <div class="form-check form-check-inline mb-0 me-4">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="inlineRadioOptions"
                      id="femaleGender"
                      value="female"
                      onChange={this.gender}
                    />
                    <label class="form-check-label" for="femaleGender">Female</label>
                  </div>

                  <div class="form-check form-check-inline mb-0 me-4">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="inlineRadioOptions"
                      id="maleGender"
                      value="male"
                      onChange={this.gender}
                    />
                    <label class="form-check-label" for="maleGender">Male</label>
                  </div>

                  <div class="form-check form-check-inline mb-0">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="inlineRadioOptions"
                      id="otherGender"
                      value="other"
                      onChange={this.gender} 
                    />
                    <label class="form-check-label" for="otherGender">Other</label>
                  </div>

                </div>



                <div class="form-outline mb-4">
                <label class="form-label" for="form3Example9">Date of Birth</label>
                  <input type="date" id="form3Example9" class="form-control form-control-lg; form-control datepicker" value={this.state.dob} onChange={this.dob} name="bday" max="2021-09-21" required/>
                  
                  
                </div>


                <div class="form-outline mb-4">
                  <input type="email" id="form3Example97" class="form-control form-control-lg" value={this.state.email} onChange={this.email} required placeholder="Email address"/>
                  
                 
                </div>
                <div class="form-outline mb-4">
                  <input type="password" id="form3Example97" class="form-control form-control-lg" value={this.state.password} onChange={this.password} required placeholder="Password"/>
                  
                </div>

                <div>
                <button type="button" class="btn btn-warning btn-lg ms-2" onClick={this.register}>Create Account</button>
                
                  <button type="button" class="btn btn-light btn-lg">Reset all</button>
                  </div>

              </div></form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
 </section>
  </div>
   );
 }

};

export default withRouter(Registration);