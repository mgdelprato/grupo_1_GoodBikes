
window.addEventListener("load",function(){
    let formulario = document.querySelector("form.login"); //selecciono el formulario

    formulario.addEventListener("submit",function(event){ //evento submit ejecuto validaciones
        event.preventDefault();
        let listaErrores = document.querySelector("div.errores ul")
        listaErrores.innerHTML = "<li>" + "" +"</li>"
        let errores = [];

        /*VALIDACION DE EMAIL*/
        let email=document.querySelector("#email");
        let regex= new RegExp("^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$")

        
        if(email.value  == ""){
            errores.push("El campo email debe estar completo")
        
        }else if(!regex.test(email.value)){
            errores.push("Por favor ingrese un mail valido")
        }
        
        /*VALIDACION DE PASSWORD*/
        let password = document.querySelector("#password");

        if(password.value == ""){
            
            errores.push("El campo de contraseña debe estar completo")
        }
        
        /*CHEQUO DE ERRORES*/
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