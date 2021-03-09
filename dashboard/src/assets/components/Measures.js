import React from 'react';
import gbResourses from '../../requests/gbResourses';

let countUsers








let measuresDetails = [
    {
        cardBorder: 'card border-left-primary shadow h-100 py-2',
        number:'135',
        symbol:'fas fa-clipboard-list fa-2x text-gray-300',
        titleDescription:'PRODUCTS IN DATA BASE',
        titleStyle:'text-xs font-weight-bold text-primary text-uppercase mb-1'
    },
    {
        cardBorder: 'card border-left-success shadow h-100 py-2',
        number:'546456',
        symbol:'fas fa-dollar-sign fa-2x text-gray-300',
        titleDescription:'AMOUNT IN PRODUCTS',
        titleStyle:'text-xs font-weight-bold text-success text-uppercase mb-1'
    },
    {
        cardBorder: 'card border-left-warning shadow h-100 py-2',
        number:countUsers,
        symbol:'fas fa-user-check fa-2x text-gray-300',
        titleDescription:'Cantidad de usuarios',
        titleStyle:'text-xs font-weight-bold text-warning text-uppercase mb-1'
    }
]

gbResourses.users().then(function(results){
    console.log(results.data.count);
    console.log(measuresDetails[0].number);
    measuresDetails[0].number = results.data.count
    console.log(measuresDetails[0].number);
})



function Measures(props){

 

        return(
                
                //Intento de mapeo
                
                measuresDetails.map((item,n) => 


                <div className ="col-md-4 mb-4" key ={n}>
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


export default Measures