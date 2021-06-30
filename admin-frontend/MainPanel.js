import React from 'react';
import Navbar from './component/navBar';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AddAdministrator from './component/addAdministrators';
import ViewAdministrator from './component/viewAdministrators';
import {Box} from "@material-ui/core";

function MainPanel() {
    // const classes = useStyles();
    return(
        <div >
           
            {/* <Router>
            <div class="row">
            <div class="col-md-auto"><ViewAdministrator/></div>
             <div class="col-md-auto"><AddAdministrator/></div>
            
            </div>

            
            
            </Router>  */}
            
           
        </div>
    );
}

export default MainPanel;