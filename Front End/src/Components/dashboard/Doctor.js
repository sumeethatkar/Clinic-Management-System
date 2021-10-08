import React, { useContext } from 'react';
import { withRouter } from 'react-router';
import NavbarDoctor from '../Doctor/NavbarDoctor';
import './Homepage.css';

class Doctor extends React.Component{
    render()
    {
        return(
            <div>
                <NavbarDoctor/>
                    
                <div class="doc">
             
                <div className="row">
                  
                    <div class="col-xl-12 d-none d-xl-block">

                   
                       
                       <br/>
                       <br/> 
                       <br/>  <br/>  <br/> 
                    <h1><b><i><span>"Sometimes, the best thing we can do<br/> for our patients 
                        is to tell them what the<br/> best behavior is and then negotiate 
                        something <br/>they can live with"</span></i></b></h1><br/>
                     <br/>    <br/>    <br/>    <br/><br/>    <br/><br/>    <br/>
                      </div>
                </div>
                </div>
            </div>
        )
    }
}
export default withRouter(Doctor);