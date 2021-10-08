import React, { useContext } from 'react';
import { withRouter } from 'react-router';
import NavbarAdmin from '../Admin/NavbarAdmin';
import './Homepage.css';

class Admin extends React.Component{
    render()
    {
        return(
            <div>
                <NavbarAdmin/>
                
                <div class="admin">
             
             <div className="row">
               
                 <div class="col-xl-12 d-none d-xl-block">

                
                    
                    <br/>
                    <br/> 
                    <br/>  <br/>  <br/> 
                    <div class="relative" style={{color:'maroon'}}>  <h3>Doctor</h3></div>
                    <div class="relative1"style={{color:'maroon'}}>  <h3>Patient</h3></div>
                  <br/>    <br/>    <br/>    <br/><br/>    <br/><br/>    <br/>
                   </div>
                   </div></div>
            </div>
        )
    }
}
export default withRouter(Admin);