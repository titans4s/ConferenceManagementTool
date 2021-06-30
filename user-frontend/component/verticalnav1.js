
import React, { useState } from 'react';
import { useCookies } from 'react-cookie';

const VerticalNavbar1 = () => {
    const [name, setName] = useState('');
    const [pwd, setPwd] = useState('');
    const [cookies, setCookie] = useCookies(['user']);

    const handle = () => {
        setCookie('Name', name, { path: '/' });
        setCookie('Password', pwd, { path: '/' });
    }

    const navigate = (e, email) => {

        window.location = `/approved/${cookies.Name}`
    };

    const navigate1 = (e, email) => {

        window.location = `/notapprove/${cookies.Name}`
    };

    return (

        <div className="navbar-nav sidebar accordion" id="accordionSidebar">

            <ul className="navbar-nav bg-dark sidebar sidebar-dark accordion" id="accordionSidebar">
                <a class="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
                    <div class="sidebar-brand-icon rotate-n-15">
                        <i class="fas fa-laugh-wink"></i>
                    </div>
                    <div class="sidebar-brand-text mx-3">Researcher </div><br />


                </a>

                <hr class="sidebar-divider my-0" />
                <li class="nav-item active">
                    <a class="nav-link" href="index.html">
                        <i class="fas fa-fw fa-tachometer-alt"></i>
                        <span>DashBoard</span></a>

                </li>

                <hr class="sidebar-divider my-0" />
                <li class="nav-item active">
                    <a class="nav-link" href="index.html">

                        {cookies.Name}</a>

                </li>
                <hr class="sidebar-divider" />
                <div class="sidebar-heading">
                    Interface
                </div>

                <li class="nav-item">


                    <a class="nav-link collapsed" href="/create-researcher">Submit Research Papers</a>
                    <a class="nav-link collapsed" onClick={e => navigate(e, name)}>View approved papers</a>
                    <a class="nav-link collapsed" onClick={e => navigate1(e, name)}>View not approved papers</a>


                </li>
                <li class="nav-item">

                    <div>
                        <a class="nav-link collapsed" href="/" >Logout</a>



                    </div>

                </li>


            </ul>
        </div>
    )



}

export default VerticalNavbar1;