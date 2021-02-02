window.addEventListener("load",function(){
    let formulario = document.querySelector("form.login");

    console.log("estoy en validar front en el form");
    formulario.addEventListener("submit",function(event){
         
        console.log("estoy en validar front en el submit");
        let errores = [];
        let email=document.querySelector("#email");
        console.log(email);
        console.log(email.value);

        let regex= new RegExp('/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/')
        
        if(email.value == ""){
            errores.push("El campo email debe estar completoooooo")
        }else if(regex.test(email.value) == true){
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