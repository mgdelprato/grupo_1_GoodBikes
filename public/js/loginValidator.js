
window.addEventListener("load",function(){
    let formulario = document.querySelector("form.login"); //selecciono el formulario

    formulario.addEventListener("submit",function(event){ //evento submit ejecuto validaciones
        event.preventDefault();

        let errors = {};

        /*VALIDACION DE EMAIL*/
        let email = document.querySelector("#email");
        let errorMail = document.querySelector('#errorEmail')
        let regex= new RegExp("^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$")

        
        if(email.value  == ""){
            errors.email = "El campo email debe estar completo"
            errorMail.innerText = errors.email
        
        }else if(!regex.test(email.value)){
            errors.email = "Por favor ingrese un mail valido"
            errorMail.innerText =  errors.email
        }
        
        /*VALIDACION DE PASSWORD*/
        let password = document.querySelector("#password");
        let errorPassword = document.querySelector('#errorPassword')

        if(password.value == ""){
            
            errors.password = "El campo de contraseña debe estar completo"
            errorPassword.innerText = errors.password 
        }
        
        /*CHEQUO DE ERRORES*/
        if(Object.keys(errors).length > 0 ){
        
        }else{
            formulario.submit();
        }
    })
})