import React,{useEffect,useState} from 'react';
import gbResourses from '../../../requests/gbResourses';



function ImgProfile(props){

  const [data, setData] = useState({
    first_name:"",
    last_name:"",
    avatar:""
  
  })
  
  
let usuario 
  useEffect(() => {
    gbResourses.users().then(function(usuarios){
    
      gbResourses.detailUser(usuarios.data.users[10].id).then(function(detalle){
        console.log(detalle);
        for(let i=0; i<usuarios.data.users.length; i++){
          if(usuarios.data.users[i].email == "admin@gmail.com"){
            setData({
              first_name:usuarios.data.users[i].first_name,
              last_name:usuarios.data.users[i].last_name,
              avatar:"http://" + detalle.data.detalle.avatar
            })
          }
        }   
      })

    })


  
  }, [])

    return(
     <>
      <li className ="nav-item dropdown no-arrow">
      <a className ="nav-link dropdown-toggle" href="http://localhost:5000/users/profile" id="userDropdown">
        <span className ="mr-2 d-none d-lg-inline text-gray-600 small">{data.first_name} {data.last_name}</span>
        <img className ="img-profile rounded-circle" src={data.avatar} width="60"/>
      </a>
    </li>
    </>
     
    )
}

export default ImgProfile