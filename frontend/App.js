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
function App() {
    return(
        <div className="wrapper">         
            <Router> 
            <Navbar/>
            <div className="row">
             <div className="col col-lg-2"><AdminPanel/></div>
            <div className="col">
            
            <Box width="100%">
            <Switch>
             <span><Route path="/create-admin" component={AddAdministrator} /> </span>
             <span><Route path="/view-admin" component={ViewAdministrator} /> </span>
             {/* <span><Route path="/viewStats" component={ChartsPage} /> </span> */}
            </Switch>
            </Box>
            </div>
            </div>
                    
            </Router> 
            
           
        </div>
    );
}

export default App;