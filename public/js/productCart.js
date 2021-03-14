
function levantaID(){

        let elemento = document.getElementsByClassName('elItem'); 
        let array_id = [];

        for(let i = 0; i < elemento.length; i++){
            let id = elemento[i].getAttribute('id');
            array_id.push(id);
        }

        console.log(array_id);
        localStorage.setItem('datos', JSON.stringify(array_id)); // Guardo el objeto como un string en Storage
} //End function levantaID


function guardaCantidades(){

    let elementoQ = document.getElementsByClassName('CantidadProducto'); 
    let array_idQ = [];

    for(let i = 0; i < elementoQ.length; i++){
        let idQ = elementoQ[i].getAttribute('id');
        let Q = elementoQ[i].value
        array_idQ.push([idQ,Q]);
    }

    console.log(array_idQ);
    localStorage.setItem('datosQ', JSON.stringify(array_idQ)); // Guardo el objeto como un string en Storage
} //End function guardaCantidades




function CambioEnCantidad(){

    let elementoClass = document.getElementsByClassName('CantidadProducto'); 

    for(let n = 0; n < elementoClass.length; n++){
        elementoClass[n].addEventListener("change", function(){
            
            guardaCantidades()
            recalcula()

        })
    }

    
}//End function CambioEnCantidad




function recalcula(){
    let items = JSON.parse(localStorage.getItem('datos'))

    //Calcula subtotales
    items.map(item => 
            document.getElementById('PxQ'+item).innerHTML = 
            '<p id="PxQ"' + item + 'class="valorProducto">' +  
            parseInt(document.getElementById('P'+item).textContent,10)*parseInt(document.getElementById('Q'+item).value,10)
            + '</p>'
            )
    //Calcula totales
    let acumula = 0
    let valor

    for (let i = 0; i < items.length; i++) {
        valor = parseInt(document.getElementById('PxQ'+items[i]).textContent,10)
        acumula = acumula + valor        
        }

    document.getElementById('suma').value = acumula

//    document.getElementById('suma').innerHTML = '<p id="suma" class="precio">' + acumula + '</p>'
//    document.getElementById('sumaBD').value = valor

}//End Function levantaID
        
levantaID()
CambioEnCantidad()
recalcula()
               

