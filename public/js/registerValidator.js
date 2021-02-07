
window.addEventListener("load",function(){
let formulario = document.querySelector("form.register"); //selecciono formulario

formulario.addEventListener("submit",function(event){
    event.preventDefault();
    let errors = {};
    
    /* VALIDACION DE NOMBRE */
    let name = document.querySelector("#name")
    let errorName = document.querySelector("#errorName")

    if(name.value == ""){
        errors.name = "El nombre no puede ser vacio"
        errorName.innerText =  errors.name
    }else if(name.value.length <= 2){
        errors.name = "El nombre debe tener mas de 2 caracteres"
        errorName.innerText = errors.name
    }

     /* VALIDACION DE APELLIDO */
    let apellido = document.querySelector("#apellido");
    let errorApellido = document.querySelector("#errorApellido")    
    
    if(apellido.value == ""){
        errors.apellido = "El apellido no puede ser vacio"
        errorApellido.innerText =  errors.apellido
    }else if(apellido.value.length <= 3){
        errors.apellido = "El apellido debe tener mas de 3 caracteres"
        errorApellido.innerText = errors.apellido
    }

    /* VALIDACION DE EMAIL */
    let email = document.querySelector("#email");
    let errorEmail = document.querySelector("#errorEmail") 
    let regexMail= new RegExp("^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$")
    
    if(email.value == ""){//validación de cambio vacío

        errors.email = "El campo email debe estar completo"
        errorEmail.innerText = errors.email

    }else if(regexMail.test(email.value) == false){
  
        errors.email = "Por favor ingrese un mail valido"
        errorEmail.innerText = errors.email
    }

     /* VALIDACION DE PASSWORD */
    let password = document.querySelector("#password")
    let errorPassword = document.querySelector("#errorPassword")
    let regexPass = new RegExp('(?=^.{8,}$)(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z])(?=.*[^A-Za-z0-9]).*')

    if(password.value.length == 0){
        errors.password = "El campo de contraseña debe estar completo"
          errorPassword.innerText = errors.password 
        }else if(password.value.length > 8){
                 if(regexPass.test(password.value)){
                    console.log("contraseña correcta");
                 }else{
                    errors.password = "La contraseña debe contener Mayúsculas, un número y un carácter especial"
                    errorPassword.innerText = errors.password 
                }
            }else{
                errors.password = "El longitud del password debe tener al menos 8 caracteres"
                errorPassword.innerText = errors.password     
            }
     /* VALIDACION DE AVATAR */
    let avatar = document.querySelector("#avatar")
    let errorAvatar = document.querySelector("#errorAvatar")
    let extensionesValidas = ['.jpg','.jpeg','.png','.gif']
    let extension = (avatar.value.substring(avatar.value.lastIndexOf("."))).toLowerCase();       
    
        let bandera = extensionesValidas.find(elemento=> extension==elemento)

        if(bandera == undefined){
            errors.avatar = "Por favor ingresar imagenes con extension JPG, JPG, PNG O GIF"
            errorAvatar.innerText = errors.avatar
        }

    /* VALIDACION DE ERRORES */     
   if(Object.keys(errors).length > 0 ){
      
   }else{
       formulario.submit();
   }
    })
})