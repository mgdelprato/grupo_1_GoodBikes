import React, { useEffect, useState } from 'react';
import gbResourses from '../../requests/gbResourses';

function MeasuresFunc(props){
    
    // const [countUser, setCountUser] = useState(0)
    const [data, setData] = useState({
        countUsers: 0,
        countAmount: 0,
        countProducts: 0
    });

    useEffect( () => {
        gbResourses.users().then(function(usuarios){
            
            gbResourses.products().then(function(productos){
              
                console.log(productos.data.products);
                let contadorPrecio =0;
                parseInt(productos.data.products.price,10)
                for(let i =0; i< productos.data.products.length; i++ ){
                    contadorPrecio = contadorPrecio + parseInt(productos.data.products[i].price,10)
                }
                
                // setCountUser(results.data.count)
                setData({countProducts : productos.data.count,countUsers : usuarios.data.count, countAmount:contadorPrecio}) 
            })  
        })
            
    }, []
    )
    
    
    let measuresDetails = [
        {
            cardBorder: 'card border-left-primary shadow h-100 py-2',
            number:data.countProducts,
            symbol:'fas fa-clipboard-list fa-2x text-gray-300',
            titleDescription:'Productos en catálogo',
            titleStyle:'text-xs font-weight-bold text-primary text-uppercase mb-1'
        },
        {
            cardBorder: 'card border-left-success shadow h-100 py-2',
            number: data.countAmount,
            symbol:'fas fa-dollar-sign fa-2x text-gray-300',
            titleDescription:'Valor en $ de Inventario',
            titleStyle:'text-xs font-weight-bold text-success text-uppercase mb-1'
        },
        {
            cardBorder: 'card border-left-warning shadow h-100 py-2',
            number:data.countUsers,
            symbol:'fas fa-user-check fa-2x text-gray-300',
            titleDescription:'Cantidad de usuarios activos',
            titleStyle:'text-xs font-weight-bold text-warning text-uppercase mb-1'
        }
    ]
    console.log(data);
    
    return(
        
        //Intento de mapeo
            measuresDetails.map((item,n) => 
            <div className ="col-md-4 mb-4" key ={n} id = {n} >
                    <div className = {item.cardBorder} >
                        <div className ="card-body">
                            <div className ="row no-gutters align-items-center">
                                            <div class Name ="col mr-2">
                                                        <div className ={item.titleStyle}> {item.titleDescription}</div>
                                                        <div className ="h5 mb-0 font-weight-bold text-gray-800">{item.number}</div>
                                            </div>
                                            <div className ="col-auto">
                                                    <i className ={item.symbol}></i>
                                            </div>
                            </div>
                        </div>
                    </div>
                </div>)



) //Cierra return
        

}; // Cierra Function

export default MeasuresFunc;