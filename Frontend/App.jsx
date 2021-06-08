import React from 'react'; 
import Header from './src/component/navbar/header'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import CreateWorkshop from './src/component/createworkshop/createworkshop';
import GetWorkshop from './src/component/getworkshop/getallworkshop';
import GetWorkshopByID from './src/component/getworkshop/workshopStatus';
import ShowApproved from './src/component/getworkshop/showapproved';
import Viewdetails from './src/component/getworkshop/viewdetails'

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
                     <Route path ="/create-workshop" component={CreateWorkshop} exact/>
                     <Route path ="/all" component={GetWorkshop} exact />
                     <Route path ="/:id" component={GetWorkshopByID}  exact/>
                     <Route path ="/" component={ShowApproved} exact />
                     <Route path ="/shows/:id" component={Viewdetails}  />
                </Switch>   
                 </section>

                </Router>
            </div>
       
        );
     } 
    }




    