import React, { useContext } from 'react';
import { withRouter } from 'react-router';
import NavbarPatient from './NavbarPatient';
import Cookies from 'universal-cookie';



class BookAppointment extends React.Component{
  constructor(props)
  {
    super(props);
    this.state=
    {
      "fname":"",
      "lname":"",
      "app_date":"",
      "app_time":"",
      "bdr_id":""
     
    }    
    this.fname=this.fname.bind(this);
    this.lname=this.lname.bind(this);
    this.app_date=this.app_date.bind(this);
    this.app_time=this.app_time.bind(this);
    this.bdr_id=this.bdr_id.bind(this);
    this.onSubmit=this.onSubmit.bind(this);
  }
  
  componentDidMount()
  {
    const dr_id = window.location.search;
    const params = new URLSearchParams(dr_id);

    var bdr_id = params.get("bdr_id");
    const cookies = new Cookies();
    cookies.set('bdr_id',bdr_id,{path:'/'})

    this.setState({bdr_id:cookies.get('bdr_id')})
    //const cookies = new Cookies();
    var api_get = "http://localhost:8080/auth/v1/get_by_id?user_id="+cookies.get('u_id')
    fetch(api_get)
    .then(resp=>resp.text())
    .then(data=> {
     
     const json = JSON.parse(data);
     //alert(myobj[0].fname)
     this.setState({fname:json[0].fname});
     this.setState({lname:json[0].lname});
     this.setState({u_id:json[0].u_id});
     this.setState({bdr_id:json[0].bdr_id});
     this.setState({app_date:json[0].app_date});
     this.setState({app_time:json[0].app_time});
    
   }
  );
    

}

onSubmit()
{


  const cookies = new Cookies();
    var api_get = "http://localhost:8080/auth/v1/book_app"
 
  console.log(this.state);
  const requestOptions={
    method:'POST',
    headers:{
      'Content-Type':'application/json'
    },
    body:JSON.stringify({
      
    
      fname: this.state.fname,
      lname: this.state.lname,
    
      app_date:this.state.app_date,
      app_time:this.state.app_time,
    
      u_id:cookies.get('u_id'),
      dr_id:cookies.get('bdr_id')
      
      

    
    })
  }


 alert("Appointment Booked Successfully.......")
 this.props.history.push("/patient");
  


  
    fetch("http://localhost:8080/auth/v1/book_app",requestOptions)
    .then(resp=>resp.text())
    .then(data=> {if(data.length != 0){
     //const json = JSON.parse(data);
    
   }
   else{
     alert("Not Booked")
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

app_date=(event)=>
{
  this.setState({app_date: event.target.value});
  console.log(this.state);
}
app_time=(event)=>
{
  this.setState({app_time: event.target.value});
  console.log(this.state);
}

bdr_id=(event)=>
{
  this.setState({bdr_id: event.target.value});
  console.log(this.state);
}


  render()
    {
        return(
            <div>
                <NavbarPatient/>      
                <div class="contact-wrapper"> 
                        <div class="container-fluid no-padding">
  <div class="row">
    <div class="col-md-12">
    <h3><i>Book Appointment</i></h3>
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
                <label class="form-label" for="form3Example9">Doctor Id</label>
                <input type="text" class="form-control" id="lname"value={this.state.bdr_id} name="bdr_id" onChange={this.bdr_id}  required/>
                </div>


                <div class="form-outline mb-4">
                <label class="form-label" for="form3Example9">Select Date</label>
                <input type="Date" class="form-control" id="app_date"value={this.state.app_date} name="app_date" onChange={this.app_date} name="app_date"  min="2021-09-26" required/>
                </div>
               

                <div class="row">
                  <div class="form-outline mb-4">
                  <label class="form-label" for="form3Example9">Select Time : </label>
                <select class="select"  name="app_time" onChange={this.app_time} >
                <option value="0">Select</option>
                      <option value="09AM-10PM">09AM-10PM</option>
                      <option value="10AM-11AM">10AM-11AM</option>
                      <option value="11AM-12PM">11AM-12PM</option>
                      <option value="04PM-05PM">04PM-05PM</option>
                      <option value="05PM-06PM">05PM-06PM</option>
                      <option value="06PM-07PM">06PM-07PM</option>
                      <option value="07PM-08PM">07PM-08PM</option>
                    </select>
                    </div>
                    </div>
          
               

      
      <button class="btn btn-primary send-button" id="submit" type="button" value="SEND" onClick={this.onSubmit}>
        <div class="alt-send-button">
          <i class="fa fa-paper-plane"></i><span class="send-text">Book</span>
        </div>
      
      </button>
      
    </form>
    </div>
            </div>
        )
    }
}
export default withRouter(BookAppointment);