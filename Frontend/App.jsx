import React from 'react'; 
import Header from './src/component/navbar/header'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import GetWorkshop from './src/component/getworkshop/getallworkshop';
import GetWorkshopByID from './src/component/getworkshop/workshopStatus';
import ShowApproved from './src/component/getworkshop/showapproved';
import Viewdetails from './src/component/getworkshop/viewdetails'
import Download from './src/component/dowloads/dowload'
import LoginNav from './loginnav'
import Login from './src/component/login/login'

export default class App extends React.Component { 
    constructor(props) { super(props); 
    } 
    
    render() { 
        return( 
            <div>
               
                <Router>
                
                
                <Header />
                 <section>
                 <Switch>
                     <Route path ="/create-workshop" component={LoginNav} exact/>
                     <Route path ="/all" component={GetWorkshop} exact />
                     <Route path ="/login" component={Login}  exact/>
                     <Route path ="/download" component={Download}  exact/>
                     <Route path ="/:id" component={GetWorkshopByID}  exact/>
                     <Route path ="/" component={ShowApproved} exact />
                     <Route path ="/shows/:id" component={Viewdetails}  exact/>
                     <Route path ="/approve/:email" component={LoginNav} exact />
                     <Route path ="/unapprove/:email" component={LoginNav}  exact/>
                     
                </Switch>   
                 </section>

                </Router>
            </div>
       
        );
     } 
    }




    