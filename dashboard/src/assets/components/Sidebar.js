import React from 'react';

import NavItems from './NavItems';

function Sidebar(props){
    return(

      <ul className ="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
                  
      <a className ="sidebar-brand d-flex align-items-center justify-content-center" href="/">
        <div className ="sidebar-brand-icon"><i className ="fas fa-chart-line"></i></div>
        <div className ="sidebar-brand-text mx-3">Admin</div>
      </a>

      <hr className ="sidebar-divider my-0"/>      

      <NavItems classOne="nav-item active" classTwo="nav-link" classThree="fas fa-fw fa-tachometer-alt" text = "Dashboard" />
            
      <hr className ="sidebar-divider"/>
      <div className ="sidebar-heading">Actions</div>

      <NavItems classOne="nav-item" classTwo="nav-link collapsed" classThree="fas fa-fw fa-folder" text = "Home" />
             

      <hr className ="sidebar-divider d-none d-md-block"/>
      </ul>
     
    )
}


export default Sidebar