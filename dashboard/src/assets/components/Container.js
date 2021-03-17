import React from 'react';

// let containerDetails = 
// [
//   {text: 'Last product in Data Dase', classDetails:'card-body'},
//   {text: 'Categorias existentes', classDetails:'row'}]

function Container(props){
    return(
            
                    <div className ="col-lg-6 mb-4">
                      <div className ="card shadow mb-4">
                        <div className ="card-header py-3">
                          <h6 className ="m-0 font-weight-bold text-primary">{props.text}</h6>
                        </div>
                        <div className ={props.classDetails}>
                          
                          {props.children}

                        </div>
                      </div>
                    </div>
        
    )
}

export default Container