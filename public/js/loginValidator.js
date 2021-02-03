window.addEventListener("load",function(){
    let formulario = document.querySelector("form.login"); //selecciono el formulario

    formulario.addEventListener("submit",function(event){ //evento submit ejecuto validaciones
        
        let errores = [];
        let email=document.querySelector("#email");
        
        let regex= new RegExp("^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$")
        
        if(email.value == ""){//validación de cambio vacío
            errores.push("El campo email debe estar completo")
        }else if(regex.test(email.value) == false){
            console.log(typeof email.value);
            console.log(regex.test(email.value));
            errores.push("Por favor ingrese un mail valido")
        }
        
        let password = document.querySelector("#password");
        if(password.value== null){
            errorres.push("El campo de contraseña debe estar completo")
        }

        if(errores.length > 0 ){
            event.preventDefault();
            let listaErrores = document.querySelector("div.errores ul")
            for(let i =0; i < errores.length; i++){
                listaErrores.innerHTML += "<li>" + errores[i] +"</li>"
            }
        }
    })
})