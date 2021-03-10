let elemento = document.getElementsByClassName('elItem'); 
let cantidad = elemento.length;
let array_id = Array();

for(let i = 0; i < cantidad; i++){
    let id = elemento[i].getAttribute('id');

    array_id.push('id:' + id);
}

console.log(array_id);



// Guardo el objeto como un string
localStorage.setItem('datos', JSON.stringify(array_id));


console.log('Dato recuperado para Front' + localStorage.getItem('datos'))


// document.getElementById('2') + document.getElementById('14')



// Suma.innerHTML = ""