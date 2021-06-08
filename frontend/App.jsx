import React from 'react';
import Navbar from './component/nav';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Researcher from './component/Researcher';
import Navbar from './component/nav';
import ResearchReviewer from './component/Reviewer';
import paper from './component/paperDetails';
import normal from './component/normal';
import NavbarVertical from './component/verticalnav';

export default class App extends React.Component {
 constructor(props) {
 super(props);
 }
 render() {
     return (
      <div className="App">
      <Router>
        <Navbar/>
        <section>
             <Switch>
           <Route path='/create-researcher' component={Researcher}/>
               <Route path='/get-Reviewer' component={ResearchReviewer} />
               <Route path='/:id' component={paper} />
               <Route path='/' component={normal} exact />
             
          </Switch>
        </section>
         </Router>
       
  
      </div>
        
         )
 }
}
