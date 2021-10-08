import React, { useContext } from 'react';
//import './Login.css';
import Header from './homePageComponents/Header';
import { withRouter, Redirect } from 'react-router-dom';
import Cookies from 'universal-cookie';


class DoctorRegistration extends React.Component{
      constructor(props)
      {
        
        super(props);
        this.state=
        {
          dr_id:"",
          specialization:"",
          qualification:"",
          experience:"",
          fees:"",
          time_slot:"",
          approval_status:"0"
        }

        //this.dr_id=this.dr_id.bind(this);
        this.specialization=this.specialization.bind(this);
        this.qualification=this.qualification.bind(this);
        this.experience=this.experience.bind(this);
        this.fees=this.fees.bind(this);
        this.time_slot=this.time_slot.bind(this);
        this.approval_status=this.approval_status.bind(this);
        this.onSubmit=this.onSubmit.bind(this);

      }


      componentDidMount()
      {
        const cookies = new Cookies;
        this.setState({dr_id:cookies.get('dr_id')});
      }


      specialization=(event)=>
      {
        this.setState({specialization: event.target.value});
        console.log(this.state);
      }

      qualification=(event)=>{
        this.setState({qualification: event.target.value});
      }

      experience=(event)=>{
        this.setState({experience: event.target.value});
      }

      fees=(event)=>{
        this.setState({fees: event.target.value});
        console.log(this.state);
      }
      time_slot=(event)=>{
        this.setState({time_slot: event.target.value});
      }
      approval_status=(event)=>{
        this.setState({approval_status: event.target.value});
        //console.log("gender"+event.target.value);
      }

      onSubmit()
      {
        
        const cookies = new Cookies();
        alert("Details saved successfully");
        console.log(this.state);
        const requestOptions={
          method:'POST',
          headers:{
            'Content-Type':'application/json'
          },
          body:JSON.stringify({
           dr_id: cookies.get('dr_id'),
           specialization:this.state.specialization,
           qualification:this.state.qualification,
           experience:this.state.experience,
           fees:this.state.fees,
           time_slot:this.state.time_slot,
           approval_status:this.state.approval_status
          })
 
        
        };
        fetch("http://localhost:8080/auth/v1/save_doctor",requestOptions)
        .then(resp=>resp.text())
        .then(data=> {if(data.length != 0){
         // alert(data) 
         //const json = JSON.parse(data);
         this.props.history.push("/login");
        
       }
      });
      
  }
  render(){
  
   return (
    <div>
        <Header />
        <section class="h-100 bg-dark">
  <div class="container py-2 h-100">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col">
        <div class="card card-registration my-4">
          <div class="row g-0">
            <div class="col-xl-6 d-none d-xl-block">
              <img
                src="https://mdbootstrap.com/img/Photos/new-templates/bootstrap-registration/img4.jpg"
                alt="Sample photo"
                class="img-fluid"
                style={{"border-top-left-radius": ".25rem","border-bottom-left-radius": ".25rem","height":"80%","width":"100%"}} 
              />
            </div>
            <div class="col-xl-6">
            <form class="row g-3 needs-validation" novalidate>

              <div class="card-body p-md-5 text-black">
                <h3 class="mb-5 text-uppercase">Doctor Registration</h3>
      
                <div class="row">
                  <div  class="form-outline mb-4">
                    <div class="form-outline">
                      <input type="disabled" id="disabledInput" class="form-control form-control-lg" value={this.state.dr_id} placeholder="Registered ID"/>
                      
                    </div>
                  </div>
                  <div class="row">
                  <div class="col-md-6 mb-4">
                  <select class="select"  onChange={this.specialization} >
                      <option value="0">Select specialization</option>
                      <option value="NEUROLOGIST">NEUROLOGIST</option>
                      <option value="ORTHOLOGIST">ORTHOLOGIST</option>
                      <option value="CARDIOLOGIST">CARDIOLOGIST</option>
                      <option value="DERMATOLOGIST">DERMATOLOGIST</option>
                    
                    </select>
                    </div>
                    </div>  
                </div>

                <div class="form-outline mb-4">
                  <input type="text" id="form3Example8" class="form-control form-control-lg"  onChange={this.qualification} placeholder="Qualification"/>
                  </div>

                <div class="form-outline mb-4">
                  <input type="number" id="form3Example8" class="form-control form-control-lg"  onChange={(this.experience)} placeholder="Experience"/>
                  </div>

                
                <div class="form-outline mb-4">
                  <input type="number" id="form3Example9" class="form-control form-control-lg; "  onChange={this.fees} placeholder="Consultation Fees"/>
                  </div>



                



                <div class="d-flex">
                <button type="button" class="btn btn-warning btn-lg ms-2"  onClick={this.onSubmit}>Submit form</button>
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

export default withRouter(DoctorRegistration);