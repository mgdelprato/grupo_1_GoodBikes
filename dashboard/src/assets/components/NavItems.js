import React from 'react';


function NavItems(props){
    return(

                      
      <li className ={props.classOne}>
        <a className ={props.classTwo} href="http://localhost:5000">
          <i className ={props.classThree}></i>
          <span>{props.text}</span>
        </a>
     </li>

        
    )
}

export default NavItems