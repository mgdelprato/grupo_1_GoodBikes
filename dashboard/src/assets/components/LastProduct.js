import React, { useEffect,useState } from   'react';
import gbResourses from '../../requests/gbResourses';

function LastProduct(props){

    const [data, setData] = useState({
        id:"",
        title:"",
        detail:"",
        img_ppal:"",
        detailURL:""
    })
    
    let ultimoProd
    useEffect(()=>{
        gbResourses.products().then(function(productos){
            ultimoProd = productos.data.products.length-1
            setData({
                title:productos.data.products[ultimoProd].title,
                detail:productos.data.products[ultimoProd].detail,
                img_ppal:"http://localhost:5000/images/products/" + productos.data.products[ultimoProd].img_ppal,
                detailURL:"http://localhost:5000/products/productDetail/" + productos.data.products[ultimoProd].id
            })
           
        })
    },[])


    return(
        <>
                <div className ="text-center">
                  <img className ="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: 25 + 'rem'}} src={data.img_ppal} alt="último producto"/>
                </div>
                <p>{data.title}</p>
                <p>{data.detail}</p>
                <a target="_blank" rel="nofollow" href= {data.detailURL} >View product detail</a>
        </> 
    )
}

export default LastProduct