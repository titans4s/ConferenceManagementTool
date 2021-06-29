import React, { Component } from 'react';

class Navbar extends Component{
    constructor(props) {
         super(props);
    }

    render(){
       return(
           <div>
               <nav className="navbar navbar-inverse">
            <div className="container-fluid">
              <ul className="nav navbar-nav">
                <li className="active"><a href="#">Home</a></li>
                <li className="dropdown">
                  <a className="dropdown-toggle" data-toggle="dropdown" href="#">Workshop
                  <span className="caret"></span></a>
                  <ul className="dropdown-menu">
                    <li><a href="#">Workshop details</a></li>
                    <li><a href="#">Downloads Page</a></li>
                    <li><a href="#">Upload Workshop</a></li>
                  </ul>
                </li>
                <li className="dropdown">
                  <a className="dropdown-toggle" data-toggle="dropdown" href="#">Researches
                  <span className="caret"></span></a>
                  <ul className="dropdown-menu">
                    <li><a href="/approvedpaid">Research Papers</a></li>
                    <li><a href="#">Downloads Page</a></li>
                    <li><a href="/login">Upload Research Papers</a></li>
                  </ul>
                </li>
              </ul>
              <ul className="nav navbar-nav navbar-right">
                <li><a href="#"><span className="glyphicon glyphicon-user"></span> Sign Up</a></li>
                <li><a href="/login"><span className="glyphicon glyphicon-log-in"></span> Login</a></li>
              </ul>
            </div>
          </nav>
                    </div>
       ) 
    }


}

export default Navbar;