import React, { useContext } from 'react';
//import './Login.css';
import Header from './homePageComponents/Header';
import { withRouter, Redirect } from 'react-router-dom';
//http://136.243.145.204/sendSMS?username=Mech2it&message=Your%20OTP%20for%20Online%20Clinic%20is%20224042%20valid%20for%2010%20min,%20thank%20you%20for%20using%20gateway%20sms.vitkar.tech(SHREVI)%20-%20%3CShreeshailya%20Vitkar%3E&sendername=SHREVI&smstype=PROMO&numbers=8483036123&apikey=01255428-72b3-4535-a284-70efbf746fb7

class ForgetPassword extends React.Component{ 
  constructor(props)
  {
    super(props);
    this.state=
    {
      email:"",
      mobile:"",
      loginerr:"",
      otp:"000000",
      opt_status:"",
      nohide:false,
      mobile_err:"",
      sms_api:""

    }
  }


  email=(event)=>{
    this.setState({email: event.target.value});
  }
  mobile=(event)=>{

    if(event.target.value.length<10)
    {
        this.setState({mobile_err:"Enter valid 10 digit number"})
        
    }else
    {
        this.setState({nohide:true})
        this.setState({mobile: event.target.value});
        var no= event.target.value;
        var smsapi = "http://136.243.145.204/sendSMS?username=Mech2it&message=Your%20OTP%20for%20Online%20Clinic%20is%20224042%20valid%20for%2010%20min,%20thank%20you%20for%20using%20gateway%20sms.vitkar.tech(SHREVI)%20-%20%3CShreeshailya%20Vitkar%3E&sendername=SHREVI&smstype=PROMO&numbers="+{no}+"&apikey=01255428-72b3-4535-a284-70efbf746fb7";
       // fetch(smsapi)
    }
    
  }

  checkOtp = (e)=>
  {
      if(e.target.value==this.state.otp)
      {
        this.setState({opt_status:"OTP verified password is sent to your mobile"})
      }
      else
      {
          this.setState({opt_status:"Wrong OTP"})
          //alert(this.state.otp)
      }
  }

  submitData =(e)=>
  {
   
    var otpGenerator = require('otp-generator');
    const otp = otpGenerator.generate(6, { upperCase: false, specialChars: false });
    this.setState({otp:this.state.otp});

    //alert(otp)


    fetch("")
    .then(resp=>resp.text())
    .then(data=> {if(data.length != 0){
    //alert(data) 

    this.setState({nohide:true})
    
    
    }
    else
    {
    this.setState({loginerr: "wrong ID/mobile"});
    alert(this.state.loginerr);
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
            <br/><br/><br/><br/><br/><br/><br/><br/>
            <form class="row g-3 needs-validation" novalidate>

              <div class="card-body p-md-5 text-black">
                <h3 class="mb-5 text-uppercase">Forget Password</h3>
                
                <div class="form-outline mb-4">
                  <input type="email" id="form3Example97" class="form-control form-control-lg" value={this.state.email} onChange={(event)=>this.email(event)} required placeholder="Email address"/>
                </div>
                <div class="form-outline mb-4">
                              
                  <input type="number" id="form3Example97" class="form-control form-control-lg"  onChange={(event)=>this.mobile(event)} required placeholder="Mobile number"/>
                 
                </div>
                

               
                
                {/*
                <div class="d-flex justify-content-end pt-3">
                  <button type="submit" class="btn btn-warning btn-lg ms-2" onClick={this.submitData}>Forget Password</button>
                </div>
                <br/>
                */}
                {this.state.nohide && <div>
            
                <div class="form-outline mb-4">
                  <input type="text" id="form3Example97" class="form-control form-control-lg" value={this.state.checkOtp} onChange={(event)=>this.checkOtp(event)} required />
                  <label class="form-label" for="form3Example97">Enter OTP send on your mobile</label>
                </div>
                </div>}
                
                {this.state.opt_status}

              </div></form>
              <p class="text-danger">{this.state.loginerr}</p>
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

export default withRouter(ForgetPassword);