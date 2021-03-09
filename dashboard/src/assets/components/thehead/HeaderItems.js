import React from 'react';
import gbResourses from '../../../requests/gbResourses';

let HeaderItemsDetails = 
[{
  id: 'alertsDropdown',
  text: '3+',
  icon: 'fas fa-bell fa-fw'
},
{
  id: 'messagesDropdown',
  text: '7',
  icon: 'fas fa-envelope fa-fw'
}
]

function HeaderItems(props){
    return(
      HeaderItemsDetails.map((item,n) =>
    
    <li className ="nav-item dropdown no-arrow mx-1" key ={n}>
      <a className ="nav-link dropdown-toggle" href="/" id={item.id}>
        <i className ={item.icon}></i>
        <span className ="badge badge-danger badge-counter">{item.text}</span>
      </a>
    </li>
     
    ))
}

console.log('Holis');

gbResourses.users().then(function(results){
  console.log(results)
});

export default HeaderItems