import React, { useState } from 'react';
import { useCookies } from 'react-cookie';

const VerticalNavbar= () => {

    const [name, setName] = useState('');
        const [pwd, setPwd] = useState('');
        const [cookies, setCookie] = useCookies(['user']);
     
        const handle = () => {
           setCookie('Name', name, { path: '/' });
           setCookie('Password', pwd, { path: '/' });
         }
         
         const navigate=(e, email)=> {
           
             window.location=`/approve/${cookies.Name}`
         };
         
         const navigate1=(e, email)=> {
           
             window.location=`/unapprove/${cookies.Name}`
             };
     

        return (
           
            <div className="navbar-nav sidebar accordion" id="accordionSidebar">
               
        <ul className="navbar-nav bg-dark sidebar sidebar-dark accordion" id="accordionSidebar">
       <a class="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
           <div class="sidebar-brand-icon rotate-n-15">
               <i class="fas fa-laugh-wink"></i>
           </div>
                        <div class="sidebar-brand-text mx-3">Workshoper </div><br/>
                     
                        
                    </a>
                    
                    <hr class="sidebar-divider my-0"/>
       <li class="nav-item active">
           <a class="nav-link" href="index.html">
               <i class="fas fa-fw fa-tachometer-alt"></i>
                            <span>DashBoard</span></a>
                          
       </li>
     
       <hr class="sidebar-divider my-0"/>
       <li class="nav-item active">
           <a class="nav-link" href="index.html">
             
          <div >{cookies.Name}</div> 
                           </a>
                          
       </li>
       <hr class="sidebar-divider"/>
       <div class="sidebar-heading">
           Interface
       </div>
     
       <li class="nav-item">
          
                   <a class="nav-link collapsed" href="/create-workshop">Submit Workshop</a>
                   <a class="nav-link collapsed" onClick={e=>navigate(e,name)}>View approved Workshop</a>
                   <a class="nav-link collapsed" onClick={e=>navigate1(e,name)}>View unapproved Workshop</a>
                   
             
                    </li>
            <li class="nav-item">
          
             <div>
             <a class="nav-link collapsed" href="/Login" >Logout</a>
         
      
                   
               </div>
           
       </li>
      
       
  </ul>
       </div>
       )
    


}

export default VerticalNavbar;