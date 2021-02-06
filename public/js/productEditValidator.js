window.addEventListener("load",function(){
    let formulario = document.querySelector("form.productEdit");


    formulario.addEventListener("submit", function(event){
        event.preventDefault();
        let listaErrores = document.querySelector("div.errores ul")
        listaErrores.innerHTML = "<li>" + "" +"</li>"
        let errores = [];
        let producto = document.querySelector("#producto")

        if(producto.value == ""){
            errores.push("El nombre del productono puede ser vacio")
        }else if(producto.value.length <= 5){
            errores.push("El nombre del producto debe tener al menos 6 caracteres")
        }

        let detalle = document.querySelector("#detalle");

        if(detalle.value == ""){
            errores.push("El detalle del productono puede ser vacio")
        }else if(producto.value.length <= 20){
            errores.push("El detalle del producto debe tener al menos de 20 caracteres")
        }

        let imagen = document.querySelector("#imagen")
        let extensionesValidas = ['.jpg','.jpeg','.png','.gif']
        let extension = (imagen.value.substring(imagen.value.lastIndexOf("."))).toLowerCase();       
    
        let bandera = extensionesValidas.find(elemento=> extension==elemento)

        if(bandera == undefined){
            errores.push("Por favor ingresar imagenes con extension JPG, JPG, PNG O GIF")
        }

        if(errores.length > 0 ){
            for(let i =0; i < errores.length; i++){
                listaErrores.innerHTML += "<li>" + errores[i] +"</li>"
                errores[i]=""
            }
           
        }else{
            formulario.submit();
        }

    })

})