  
    levantaID()
    recalcula()
    levantaID_PrimeraVez()
    CambioEnCantidad()



function levantaID_PrimeraVez(){

        let elemento = document.getElementsByClassName('elItem'); 
        let array_id = [];

        
        for(let i = 0; i < elemento.length; i++){
            let id = elemento[i].getAttribute('id');
            let Q = document.getElementById('Q'+id).value 

            array_id.push({"Producto": id, "Q": Q});

        }

        console.log(array_id);
        localStorage.setItem('datos', JSON.stringify(array_id)); // Guardo el objeto como un string en Storage
        
        
        

    } //End function levantaIDprimeraVez

function levantaID(){

    let items = JSON.parse(localStorage.getItem('datos'))
    let elementoClass = document.getElementsByClassName('elItem')

    //Controles de array vacío
    if(typeof items == null){
       levantaID_PrimeraVez()
       //alert('Dice que no hay datos guardados en storage')
       return recalcula()

    }

    if (typeof elementoClass == null) {
        levantaID_PrimeraVez()
        //alert('Dice que no hay datos productos en el carrito')
        return recalcula()
    }



   
        //Distribuye cantidades
        try{
            for (let n = 0; n < items.length; n++) {
                document.getElementById("Q"+items[n].Producto).value = parseInt(items[n].Q,10)
            } //Cierre for
        } //try
        catch(e){
            console.log(e);
            recalcula()
            
        }
        
        recalcula()
    
     
} //Cierre funcion LevantaID



function recalcula(){
    levantaID_PrimeraVez()
    let items = JSON.parse(localStorage.getItem('datos'))

    try{
    //Calcula subtotales
    for(let j=0;j<items.length;j++){


        document.getElementById('PxQ'+items[j].Producto).innerHTML = 
        '<p id="PxQ"' + items[j].Producto + 'class="valorProducto">' +  
        parseInt(document.getElementById('P'+items[j].Producto).textContent,10)*parseInt(document.getElementById('Q'+items[j].Producto).value,10)
        + '</p>'
    }

    
    
    //Calcula totales
    let acumula = 0
    let valor

    for (let i = 0; i < items.length; i++) {
        valor = parseInt(document.getElementById('PxQ'+items[i].Producto).textContent,10)
        acumula = acumula + valor        
        }

    document.getElementById('suma').value = acumula
    }//cierra tray
    catch{console.log('Sin productos en el carrito');}
}//End Function recalcula



function CambioEnCantidad(){
    
    let items = JSON.parse(localStorage.getItem('datos'))

    for(let i = 0; i < items.length; i++){
        

        document.getElementById('Q'+items[i].Producto).addEventListener("change", 
        function(){

            
            levantaID_PrimeraVez()
            recalcula()


        })
    }//End for

}//End function CambioEnCantidad




/*
function guardaCantidades(){

    let elementoQ = document.getElementsByClassName('CantidadProducto'); 
    let array_idQ = [];

    for(let n = 0; n < elementoQ.length; n++){
        let idQ = elementoQ[n].getAttribute('id');
        let Q = elementoQ[n].value
        array_idQ.push({"Producto": idQ,"Q": Q});
    }

    console.log(array_idQ);
    localStorage.setItem('datosQ', JSON.stringify(array_idQ)); // Guardo el objeto como un string en Storage
} //End function guardaCantidades


function asignaCantidades(){
    let items = JSON.parse(localStorage.getItem('datos'))
    let itemsQ = JSON.parse(localStorage.getItem('datosQ'))

    
        for (let i=0;i<itemsQ.length;i++){
            
            {document.getElementById("Q"+items[i].Producto).value = itemsQ[i].Q //Asigna valores guardados
            }
            
    } //Cierra for
    
} //Cierra function asignaCantidades


*/


