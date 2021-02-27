import React from 'react';

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
        number:'38',
        symbol:'fas fa-user-check fa-2x text-gray-300',
        titleDescription:'USERS QUANTITY',
        titleStyle:'text-xs font-weight-bold text-warning text-uppercase mb-1'
    }
]


function Measures(props){

   
        return measuresDetails.map(function (item, index) {


                <div className ="col-md-4 mb-4">
                    <div className ={props.cardBorder}>
                        <div className ="card-body">
                            <div className ="row no-gutters align-items-center">
                                            <div class Name ="col mr-2">
                                                        <div className ={props.titleStyle}> {props.titleDescription}</div>
                                                        <div className ="h5 mb-0 font-weight-bold text-gray-800">{props.number}</div>
                                            </div>
                                            <div className ="col-auto">
                                                    <i className = {measuresDetails.symbol} ></i>
                                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            
            




          }); //Cierra map
    }; // Cierra measures



export default Measures