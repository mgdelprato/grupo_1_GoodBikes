import React, { useEffect,useState } from   'react';
import gbResourses from '../../requests/gbResourses';



function Categories(props){
  
  const [data, setData] = useState({
    countRodados:0,
    countEquipamiento:0,
    countIndumentaria:0,
    countAccesorios:0,
    countTaller:0,
    arrayCategorias:[]
  }) 

  useEffect(()=>{
    gbResourses.products().then(function(productos){
      console.log(data.arrayCategorias);
      setData({
            countRodados:productos.data.countByCategory.Rodados,
            countEquipamiento:productos.data.countByCategory.Equipamiento,
            countIndumentaria:productos.data.countByCategory.Indumentaria,
            countAccesorios:productos.data.countByCategory.Accesorios,
            countTaller:productos.data.countByCategory.Taller,
            arrayCategorias:Object.keys(productos.data.countByCategory)
          })
    
    })
  },[])


  let categoriesDetails = [
    {text: `${data.arrayCategorias[0]} (${data.countRodados})`, link:`http://localhost:5000/products/productSearch/${data.arrayCategorias[0]}`},
    {text: `${data.arrayCategorias[1]} (${data.countIndumentaria})`, link:`http://localhost:5000/products/productSearch/${data.arrayCategorias[1]}`},
    {text: `${data.arrayCategorias[2]} (${data.countAccesorios})`, link:`http://localhost:5000/products/productSearch/${data.arrayCategorias[2]}`},
    {text: `${data.arrayCategorias[3]} (${data.countEquipamiento})`, link:`http://localhost:5000/products/productSearch/${data.arrayCategorias[3]}`},
    {text: `${data.arrayCategorias[4]} (${data.countTaller})`, link:`http://localhost:5000/products/productSearch/${data.arrayCategorias[4]}`}
  ]
    return(
      categoriesDetails.map((item,n) =>

        <div className ="col-lg-6 mb-4" key ={n}>
          <div className ="card bg-info text-white shadow">
            <div className ="card-body" >
               <a href={item.link} target="_blank">{item.text}</a> 
            </div>
          </div>
        </div>
    ))
}

export default Categories