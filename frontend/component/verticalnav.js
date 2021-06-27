import React, { Component } from 'react';

class VerticalNavbar extends Component{
    constructor(props) {
         super(props);
    }

    render(){
       return(
        <div className="navbar-nav sidebar accordion" id="accordionSidebar">
        <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
       <a class="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
           <div class="sidebar-brand-icon rotate-n-15">
               <i class="fas fa-laugh-wink"></i>
           </div>
           <div class="sidebar-brand-text mx-3">Researcher</div>
       </a>
       <hr class="sidebar-divider my-0"/>
       <li class="nav-item active">
           <a class="nav-link" href="index.html">
               <i class="fas fa-fw fa-tachometer-alt"></i>
               <span>Dashboard</span></a>
       </li>
       <hr class="sidebar-divider"/>
       <div class="sidebar-heading">
           Interface
       </div>
       <li class="nav-item">
           <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseTwo"
               aria-expanded="true" aria-controls="collapseTwo">
               <i class="fas fa-fw fa-cog"></i>
               <span>View Papers</span>
           </a>
           <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
               <div class="bg-white py-2 collapse-inner rounded">
                   <h6 class="collapse-header">Research papers:</h6>
                   <a class="collapse-item" href="/approve/:email">Approved</a>
                   <a class="collapse-item" href="/login">Declined</a>
               </div>
           </div>
       </li>
       <li class="nav-item">
           <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseUtilities"
               aria-expanded="true" aria-controls="collapseUtilities">
                 <i class="fas fa-fw fa-cog"></i>
               <span>Submit Research papers</span>
           </a>
           <div id="collapseUtilities" class="collapse" aria-labelledby="headingUtilities"
               data-parent="#accordionSidebar">
               <div class="bg-white py-2 collapse-inner rounded">
                   <h6 class="collapse-header">Submit:</h6>
                   <a class="collapse-item" href="/create-researcher">Add paper</a>
                   
               </div>
           </div>
       </li>
       <hr class="sidebar-divider"/>
     
      
      
       <hr class="sidebar-divider d-none d-md-block"/>
       
  </ul>
       </div>
       
       ) 
    }


}

export default VerticalNavbar;