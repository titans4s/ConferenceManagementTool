import React, { Component } from 'react';

class Navbar extends Component {
    constructor(props) {
        super(props);
    }

    render() {
      return (
        <nav class="navbar navbar-expand-lg navbar  navbar-dark bg-dark ">
          <a class="navbar-brand" href="/">ICAF</a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
  
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item active">
                <a class="nav-link" href="/">Home <span class="sr-only">(current)</span></a>
              </li>
  
  
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Researcher
                </a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a class="dropdown-item" href="/approvedpaid">Research Papers</a>
                  <a class="dropdown-item" href="/download">Download page</a>
                  <div class="dropdown-divider"></div>
                  <a class="dropdown-item" href="/Researchlogin">Upload Research papers</a>
                </div>
              </li>
  
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Workshoper
                </a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a class="dropdown-item" href="/workshop">Workshop details</a>
                  <a class="dropdown-item" href="/workshopdownload">Download page</a>
                  <div class="dropdown-divider"></div>
                  <a class="dropdown-item" href="/login">Upload Workshop</a>
                </div>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Reviewer
                </a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a class="dropdown-item" href="/get-Reviewer">Researchpaper Reviewer</a>
                  <a class="dropdown-item" href="/all">Workshop Reviewer</a>
                  
                </div>
              </li>
  
  
            </ul>
  
            <form class="form-inline my-2 my-lg-0">
              <li><a href="register"><span className="glyphicon glyphicon-user"></span> Sign Up</a></li>
              <li><a href="/loginf"><span className="glyphicon glyphicon-log-in"></span> Login</a></li>
            </form>
          </div>
        </nav>
      )
    }

}

export default Navbar;