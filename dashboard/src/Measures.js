import React from 'react';

function Measures(props){

   
        return(
            

                <div className ="col-md-4 mb-4">
                    <div className ={props.cardBorder}>
                        <div className ="card-body">
                            <div className ="row no-gutters align-items-center">
                                            <div class Name ="col mr-2">
                                                        <div className ={props.titleStyle}> {props.titleDescription}</div>
                                                        <div className ="h5 mb-0 font-weight-bold text-gray-800">{props.number}</div>
                                            </div>
                                            <div className ="col-auto">
                                                    <i className ={props.symbol}></i>
                                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            
            




            );
    };



export default Measures