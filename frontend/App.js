import React from 'react';
import Navbar from './component/navBar';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AddAdministrator from './component/addAdministrators';
import ViewAdministrator from './component/viewAdministrators';
import AdminPanel from './component/adminpanelNav';
import MainPanel from './MainPanel';
import {Box} from "@material-ui/core";
import Grid from '@material-ui/core/Grid';
import ChartsPage from './component/charts'
import RevenuechartsPage from './component/revenueCharts'
import UpdateAdministrator from './component/updateAdministrator'
function App() {
    return(
        <div className="wrapper">         
            <Router> 
            
            <div className="row">
             <div className="col col-lg-2"><AdminPanel/></div>
            <div className="col">
            <Navbar/>
            <Box width="100%">
            <section>

            <Switch>
             <Route path="/create-admin" component={AddAdministrator} exact /> 
             <Route path="/view-admin" component={ViewAdministrator} exact /> 
             <Route path="/update/:id" component={UpdateAdministrator} exact /> 
             <Route path="/viewStats" component={ChartsPage} exact /> 
             <Route path="/viewPayment" component={RevenuechartsPage} exact /> 
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