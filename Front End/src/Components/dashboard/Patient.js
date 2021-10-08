import React, { useContext } from 'react';
import { withRouter } from 'react-router';
import NavbarPatient from '../Patient/NavbarPatient';
import './Homepage.css';
class Patient extends React.Component{
    render()
    {
        return(
            <div>
                <NavbarPatient/>
                <div className="row">
                    <div class="col-xl-6">
                            <div class="pat"> </div>
                            
                     </div>
                     

                 <div class="col-xl-6">

                
                    
                    <br/>
                    <br/> 
                    <br/>  <br/>  <br/> 
                 <h1><b><i><span>“You're braver than you believe, and stronger than you seem, and smarter than you think.” is done.” “Keep your face to the sunshine and you cannot see a shadow.” “Once you replace negative thoughts with positive ones, you'll start having positive results.”</span></i></b></h1><br/>
                  <br/>    <br/>    <br/>    <br/><br/>    <br/><br/>    <br/>
                   
                   </div></div>
            </div>
        )
    }
}
export default withRouter(Patient);