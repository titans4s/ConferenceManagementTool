import React, { Component } from 'react';

class Navbar extends Component{
    constructor(props) {
         super(props);
    }

    render(){
       return(
           <div>
               <nav class="navbar navbar-expand-lg navbar-light bg-light">
                    <div class="container-fluid">
                        <a class="navbar-brand" href="#">Sliit Af project</a>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div class="navbar-nav">
                            <a class="nav-link active" aria-current="page" href="/">Course</a>
                            <a class="nav-link" href="/create-researcher">CreateResearch</a>
                               <a class="nav-link" href="/get-Reviewer">CreateReviewer</a>
                               <a class="nav-link" href="/login">login</a>
                               <a class="nav-link" href="/pay">payment</a>
                           
                            </div>
                            </div>
                        </div>
                        </nav>
                    </div>
       ) 
    }


}

export default Navbar;