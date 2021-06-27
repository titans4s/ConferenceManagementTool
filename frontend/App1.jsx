import React from 'react';
import Navbar from './component/nav';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Researcher from './component/Researcher';
import Navbar from './component/nav';
import ResearchReviewer from './component/Reviewer';
import paper from './component/paperDetails';
import normal from './component/normal';
import NavbarVertical from './component/verticalnav';
import login from './component/login';
import approved from './component/approved';
import Navbar1 from './component/navbar1';
import payment from './component/paymentform';
import {Box} from "@material-ui/core";


export default class App1 extends React.Component {
 constructor(props) {
 super(props);
 }
 render() {
     return (
      <div className="App1">
           <Router>
             
              <div class="row">
             <div class="col col-lg-2"><NavbarVertical/></div>
            <div class="col">
          

            
             <Box width="100%">
        <section>
             <Switch>
           <span><Route path='/create-researcher' component={Researcher}/></span>
             <span><Route path='/payment/:id' component={payment}/></span> 
             <span><Route path='/approve/:email' component={approved} /></span>
                  
               <Route path='/:id' component={paper} exact />
             <Route path='/' component={normal} exact />
             
          </Switch>
                         </section>
                              </Box>
                              </div>
            </div>
         </Router>
       
  
      </div>
        
         )
 }
}
