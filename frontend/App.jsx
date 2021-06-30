import React from 'react';
import Navbar from './component/nav';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
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
import { Box } from "@material-ui/core";
import loginnav from './loginnav';
import Retrieve from './component/retrievecookie';
import approvepaid from './component/paidallapproved';
import onepaper from './component/onepaper';
import download from './component/Download';



export default class App extends React.Component {
   constructor(props) {
      super(props);
   }
   render() {
      return (
         <div className="App">
            <Router>
               <div><Navbar /></div>


               <section>

                  <Switch>


                     <Route path='/approve/:email' component={loginnav} />
                     <Route path='/payment/:id' component={loginnav} />
                     <Route path='/create-researcher' component={loginnav} />
                     <Route path='/notapprove/:email' component={loginnav} />
                     <Route path='/login' component={login} />
                     <Route path='/approvedpaid' component={approvepaid} />
                     <Route path='/download' component={download} />
                     <Route path='/get-Reviewer' component={ResearchReviewer} />


                     <Route path='/onepaper/:id' component={onepaper} />
                     <Route path='/:id' component={paper} exact />
                     <Route path='/' component={normal} exact />

                  </Switch>

               </section>


            </Router>


         </div>

      )
   }
}
