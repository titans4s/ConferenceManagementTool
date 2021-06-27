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


export default class App extends React.Component {
 constructor(props) {
 super(props);
 }
 render() {
     return (
      <div className="App">
           <Router>
              <div><Navbar/></div>

    
        <section>
             <Switch>
        <Route path='/create-researcher' component={Researcher}/>
               <Route path='/get-Reviewer' component={ResearchReviewer} />
               <Route path='/payment/:id' component={payment}/>
               <Route path='/login' component={login} />
                    <Route path='/approve/:email' component={approved} />
                  
               <Route path='/:id' component={paper} exact />
             <Route path='/' component={normal} exact />
             
          </Switch>
                         </section>
                              
         
         </Router>
       
  
      </div>
        
         )
 }
}
