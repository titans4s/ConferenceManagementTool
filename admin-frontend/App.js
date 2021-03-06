import React from 'react';
import Navbar from './component/navBar';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AddAdministrator from './component/addAdministrators';
import ViewAdministrator from './component/viewAdministrators';
import AdminPanel from './component/adminpanelNav';
import MainPanel from './MainPanel';
import {Box} from "@material-ui/core";
import Grid from '@material-ui/core/Grid';
import ChartsPage from './component/charts';
import RevenuechartsPage from './component/revenueCharts';
import UpdateAdministrator from './component/updateAdministrator';
import ViewConfDetails from './component/viewConfDetails';
import workshoptype from './component/viewWorkshops';
import dashboardcp from './component/dashboard'


function App() {
    return(
        <div className="wrapper">         
            <Router> 

            <div className="row">
             <div className="col col-lg-2"><AdminPanel/></div>
            <div className="col">
            
            
            <Box width="100%">
               <Navbar/>
            <section>
            <Switch>
             <Route path="/create-admin" component={AddAdministrator} exact /> 
             <Route path="/view-admin" component={ViewAdministrator} exact /> 
             <Route path="/update/:id" component={UpdateAdministrator} exact /> 
             <Route path="/viewStats" component={ChartsPage} exact /> 
             <Route path="/viewPayment" component={RevenuechartsPage} exact /> 
             <Route path="/viewConference" component={ViewConfDetails} exact />
             <Route path="/viewWorkshop" component={workshoptype} exact /> 
             <Route path="/dashboard" component={dashboardcp} exact /> 
             <Route path="/" component={dashboardcp} exact /> 


            </Switch>
            </section>
            </Box>
            </div>
            </div>
                    
            </Router> 
            
           
        </div>
    );
}

export default App;