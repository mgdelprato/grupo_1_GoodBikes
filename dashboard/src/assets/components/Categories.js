import React from   'react';

let categoriesDetails = [
  {text: 'Rodados', link:'http://localhost:5000/products/productSearch/Rodados'},
  {text: 'Equipamiento', link:'http://localhost:5000/products/productSearch/Equipamiento'},
  {text: 'Indumentaria', link:'http://localhost:5000/products/productSearch/Indumentaria'},
  {text: 'Accesorios', link:'http://localhost:5000/products/productSearch/Accesorios'},
  {text: 'Taller', link:'http://localhost:5000/products/productSearch/Taller'}
]

function Categories(props){
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