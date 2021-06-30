import React from 'react'; 
import CreateEditor from './src/component/createeditor/createeditor';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';



export default class App extends React.Component { 
    constructor(props) { super(props); 
    } 
    
    render() { 
        return( 
            <div>
               
                <Router>
                
                
                
                 <section>
                 <Switch>
                     <Route path ="/create-editor" component={CreateEditor} exact/>
                     
                </Switch>   
                 </section>

                </Router>
            </div>
       
        );
     } 
    }




    