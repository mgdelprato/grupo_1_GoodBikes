let elemento = document.getElementsByClassName('elItem'); 
let array_id = Array();

for(let i = 0; i < elemento.length; i++){
    let id = elemento[i].getAttribute('id');

    array_id.push(id);
}

console.log(array_id);



// Guardo el objeto como un string en Storage
localStorage.setItem('datos', JSON.stringify(array_id));

//Recuperar valores de Storage
let items = JSON.parse(localStorage.getItem('datos'))

//Accionando sobre valores recuperados
items.map(item => 
    
    alert('Producto ' + item + '\n Precio: ' + document.getElementById('P'+item).textContent + 'Cantidad: ' + 
    document.getElementById('Q'+item).value + 'Subtotal: ' + parseInt(document.getElementById('P'+item).textContent,10)*parseInt(document.getElementById('Q'+item).value,10)            
            )) 


// document.getElementById('2') + document.getElementById('14')



// Suma.innerHTML = ""