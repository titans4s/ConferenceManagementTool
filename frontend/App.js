import React from 'react';
import Navbar from './component/navBar';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AddAdministrator from './component/addAdministrators';
import ViewAdministrator from './component/viewAdministrators';
import AdminPanel from './component/adminpanelNav';
import MainPanel from './MainPanel';
import {Box} from "@material-ui/core";
import Grid from '@material-ui/core/Grid';

function App() {
    return(
        <div className="wrapper">         
            <Router> 
            <Navbar/>
            <div class="row">
             <div class="col col-lg-2"><AdminPanel/></div>
            <div class="col">

            <Box width="100%">
            <Switch>
             <span><Route path="/create-admin" component={AddAdministrator} /> </span>
             <span><Route path="/view-admin" component={ViewAdministrator} /> </span>
            </Switch>
            </Box>
            </div>
            </div>
                    
            </Router> 
            
           
        </div>
    );
}

export default App;