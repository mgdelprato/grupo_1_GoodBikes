import React from 'react';


function NavItems(props){
    return(

                      
      <li className ={props.classOne}>
        <a className ={props.classTwo} href={props.enlace}>
          <i className ={props.classThree}></i>
          <span>{props.text}</span>
        </a>
     </li>

        
    )
}

export default NavItems