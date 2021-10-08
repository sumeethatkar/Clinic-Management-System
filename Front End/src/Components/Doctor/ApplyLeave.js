import React, { useContext } from 'react';
import { withRouter } from 'react-router';

import Cookies from 'universal-cookie';
import NavbarDoctor from './NavbarDoctor';


class ApplyLeave extends React.Component{
  constructor(props)
  {
    super(props);
    this.state=
    {
      "fname":"",
      "lname":"",
      "from_date":"",
      "to_date":"",
      "reason":"",
    }

    
    this.fname=this.fname.bind(this);
    this.lname=this.lname.bind(this);
    this.from_date=this.from_date.bind(this);
    this.to_date=this.to_date.bind(this);
    this.reason=this.reason.bind(this);
    this.onSubmit=this.onSubmit.bind(this);
    

   
  }
  
  componentDidMount()
  {
    const cookies = new Cookies();
    var api_get = "http://localhost:8080/auth/v1/get_by_id?user_id="+cookies.get('u_id')
    fetch(api_get)
    .then(resp=>resp.text())
    .then(data=> {
      
     const json = JSON.parse(data);
    

     //alert(myobj[0].fname)
     this.setState({fname:json[0].fname});
     console.log(this.state);
     this.setState({lname:json[0].lname});
     this.setState({from_date:json[0].from_date});
     this.setState({to_date:json[0].to_date});
     this.setState({reason:json[0].reason});
    
   }
  );
    

}

onSubmit()
{


  const cookies = new Cookies();
    var api_get = "http://localhost:8080/auth/v1/applyleave"
 
  console.log(this.state);
  const requestOptions={
    method:'POST',
    headers:{
      'Content-Type':'application/json'
    },
    body:JSON.stringify({
     
      fname: this.state.fname,
      lname: this.state.lname,
      from_date:this.state.from_date,
      to_date:this.state.to_date,
      reason: this.state.reason,
      u_id:cookies.get('u_id'),
      
     
    
    })
    
  }
  alert("Leave applied Successfully");
  this.props.history.push("/doctor");
   
  fetch("http://localhost:8080/auth/v1/applyleave",requestOptions)
    .then(resp=>resp.text())
    .then(data=> {if(data.length != 0){
     
     //const json = JSON.parse(data);
    
   }
   else{
     alert("Leave applied Successfully")
   }

  });
    

  
}
  
fname=(event)=>
{
  this.setState({fname: event.target.value});
  console.log(this.state);
}

lname=(event)=>
{
  this.setState({lname: event.target.value});
  console.log(this.state);
}

from_date=(event)=>
{
  this.setState({from_date: event.target.value});
  console.log(this.state);
}

to_date=(event)=>
{
  this.setState({to_date: event.target.value});
  console.log(this.state);
}

reason=(event)=>
{
  this.setState({reason: event.target.value});
  console.log(this.state);
}

  render()
    {
        return(
            <div>
                <NavbarDoctor/>     
                <div class="contact-wrapper"> 
                        <div class="container-fluid no-padding">
  <div class="row">
    <div class="col-md-12">
    <h3><i>Apply Leave</i></h3>
      <img src="https://image.freepik.com/free-vector/appointment-booking-with-calendar_23-2148553008.jpg" class="img-responsive" height="440" width="350"/>
    </div>
  </div>
</div>
                   
    <form id="contact-form" class="form-horizontal" role="form">
       
                <div class="form-outline mb-4">
                <label class="form-label" for="form3Example9">First Name</label>
                <input type="text" class="form-control" id="fname" value={this.state.fname}  name="fname"  onChange={this.fname} required/>
                </div>

                <div class="form-outline mb-4">
                <label class="form-label" for="form3Example9">Last Name</label>
                <input type="text" class="form-control" id="lname"value={this.state.lname} name="lname"  onChange={this.lname} required/>
                </div>

                <div class="form-outline mb-4">
                <label class="form-label" for="form3Example9">From</label>
                <input type="Date" class="form-control" id="from_date"value={this.state.from_date} name="from_date" onChange={this.from_date}min="2021-09-26" required/>
                </div>
                <div class="form-outline mb-4">
                <label class="form-label" for="form3Example9">To</label>
                <input type="Date" class="form-control" id="to_date"value={this.state.to_date} name="to_date" onChange={this.to_date}min="2021-09-26" required/>
                </div>
                
                <div class="form-outline mb-4">
                <label class="form-label" for="form3Example9">Reason</label>
                <textarea class="form-control" rows="10" placeholder="MESSAGE" name="message" required id="reason"value={this.state.reason} name="reason" onChange={this.reason}></textarea>
                </div>
                
             
               

      
      <button class="btn btn-primary send-button" id="submit" type="button" value="SEND" onClick={this.onSubmit}>
        <div class="alt-send-button">
          <i class="fa fa-paper-plane"></i><span class="send-text">Apply</span>
        </div>
      
      </button>
      
    </form>
    </div>
            </div>
        )
    }
}
export default withRouter(ApplyLeave);