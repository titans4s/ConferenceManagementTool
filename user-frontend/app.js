import React from 'react';
import Navbar from './component/navBar';
import Homebody from './component/homebody';
import GetWorkshop from './component/getworkshop/getallworkshop';
import GetWorkshopByID from './component/getworkshop/workshopStatus';
import ShowApproved from './component/getworkshop/showapproved';
import Viewdetails from './component/getworkshop/viewdetails'
import Download from './component/dowloads/dowload'
import LoginNav from './loginnav'
import Login from './component/login/login'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';

import Researcher from './component/Researcher';
import ResearchReviewer from './component/Reviewer';
import paper from './component/paperDetails';
import Researchlogin from './component/login';
import approved from './component/approved';
import loginnav1 from './loginnav1';
import approvepaid from './component/paidallapproved';
import onepaper from './component/onepaper';
import download from './component/Download';

import LoginF from './component/loginComponent/login'
import MainPageF from './component/loginComponent/mainPage'
import RegisterF from './component/loginComponent/register'

export default class App extends React.Component { 
    constructor(props) { super(props); 
    } 
    
    render() { 
        return( 
            <div>
                
                <Router>
                
      
               
                 
                 <Navbar/>
                 <Switch>
                  <Route path ="/" component={Homebody} exact/>
                     <Route path ="/create-workshop" component={LoginNav} exact/>
                     <Route path ="/all" component={GetWorkshop} exact />
                     <Route path ="/login" component={Login}  exact/>
                     <Route path ="/workshopdownload" component={Download}  exact/>
                     <Route path ="/workshop" component={ShowApproved} exact />
                    
                     <Route path="/register" exact component={RegisterF}></Route>
                        <Route path="/loginf" exact component={LoginF}></Route>
                        <Route path="/mainPage" exact component={MainPageF}></Route>


                     <Route path='/approved/:email' component={loginnav1} />
                     <Route path='/payment/:id' component={loginnav1} />
                     <Route path='/create-researcher' component={loginnav1} />
                     <Route path='/notapprove/:email' component={loginnav1} />
                     <Route path='/Researchlogin' component={Researchlogin} />
                     <Route path='/approvedpaid' component={approvepaid} />
                     <Route path='/download' component={download} />
                     <Route path='/get-Reviewer' component={ResearchReviewer} exact />
                     <Route path='/onepaper/:id' component={onepaper} />
                     <Route path='/paper/:id' component={paper} exact />


                     <Route path ="/:id" component={GetWorkshopByID}  exact/>               
                     <Route path ="/shows/:id" component={Viewdetails}  exact/>
                     <Route path ="/approve/:email" component={LoginNav} exact />
                     <Route path ="/unapprove/:email" component={LoginNav}  exact/>


                </Switch>   
                

                </Router>
            </div>
       
        );
     } 
    }