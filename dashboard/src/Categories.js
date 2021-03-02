import React from   'react';

let categoriesDetails = [
  {text: 'Rodados'},
  {text: 'Equipamiento'},
  {text: 'Indumentaria'},
  {text: 'Accesorios'},
  {text: 'Taller'}
]

function Categories(props){
    return(
      categoriesDetails.map((item,n) =>

        <div className ="col-lg-6 mb-4" key ={n}>
          <div className ="card bg-info text-white shadow">
            <div className ="card-body" >
              {item.text } 
            </div>
          </div>
        </div>
    ))
}

export default Categories