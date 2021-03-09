import React from 'react';
import HeaderItems from './thehead/HeaderItems';
import ImgProfile from './thehead/ImgProfile'

function TheHead(props){
    return(

      <nav className ="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
      <button id="sidebarToggleTop" className ="btn btn-link d-md-none rounded-circle mr-3">
        <i className ="fa fa-bars"></i>
      </button>
      
      <ul className ="navbar-nav ml-auto">
        <HeaderItems/>
        <div className ="topbar-divider d-none d-sm-block"></div>
         <ImgProfile/>
      </ul>
      </nav>
     
    )
}


export default TheHead