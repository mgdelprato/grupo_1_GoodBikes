
function levantaID(){

        let elemento = document.getElementsByClassName('elItem'); 
        let array_id = Array();

        for(let i = 0; i < elemento.length; i++){
            let id = elemento[i].getAttribute('id');
            array_id.push(id);
        }

        console.log(array_id);
        localStorage.setItem('datos', JSON.stringify(array_id)); // Guardo el objeto como un string en Storage
    }






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

    document.getElementById('suma').innerHTML = '<p id="suma" class="precio">' + acumula + '</p>'
        
}
        
levantaID()
recalcula()
               



// document.getElementById('2') + document.getElementById('14')



// Suma.innerHTML = ""