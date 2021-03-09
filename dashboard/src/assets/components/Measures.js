import React, { Component } from 'react';
import gbResourses from '../../requests/gbResourses';

class Measures extends Component {

    constructor(props){
        super(props)
        this.state = {
            items: [],
            error: null,
            isLoaded: false
        }
    }

componentDidMount () {
    gbResourses.users().then((result) => {
        this.setState({
            isLoaded: true,
            items: [
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
                number: result.data.count,
                symbol:'fas fa-user-check fa-2x text-gray-300',
                titleDescription:'Cantidad de usuarios',
                titleStyle:'text-xs font-weight-bold text-warning text-uppercase mb-1'
            }
        ]
            //results.data.count
            
        })
        console.log(this.items);
        
    },
    (error) => {
    this.setState({
      isLoaded: true,
      error
        });
    }
    )
}  

render() {
    const { error, isLoaded, items } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        this.items.map((item,n) => 
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
      );
    }
  }
}


export default Measures