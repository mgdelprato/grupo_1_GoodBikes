import React from   'react';

let categoriesDetails = [
  {text: 'Category 01'},
  {text: 'Category 02'},
  {text: 'Category 03'},
  {text: 'Category 04'},
  {text: 'Category 05'},
  {text: 'Category 06'}
]

function Categories(props){

    return(
        
      categoriesDetails.map((item,n) =>

        <div className ="col-lg-6 mb-4">
          <div className ="card bg-info text-white shadow">
            <div className ="card-body" key ={n}>
              {item.text } 
            </div>
          </div>
        </div>
      
    
    ))
}

export default Categories