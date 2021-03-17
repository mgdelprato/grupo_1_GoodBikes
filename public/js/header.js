function menuMobile() {
    var x = document.getElementById("Lista_Nav");
    if (x.style.display === "none") {
        x.style.display = "flex";
    } else {
        x.style.display = "none";
    }
    }

//Ejecución ante logout
if (document.getElementById("session_logout") != null)
{
    document.getElementById("Contenedor_Ingresar").innerHTML = '<div id="Contenedor_Ingresar" class="ingresar"><ul><li id="Tag_Login"><a href="/users/login">Login</a></li><li id="Tag_Register"><a href="/users/register">Registrate</a></li><li><a href="/products/productCart"><i id="Tag_Cart" class="fas fa-shopping-cart"></i></a></li></ul></div>';
    document.querySelector('nav').innerHTML = '<nav><i href="javascript:void(0)" id="Bars" onclick="menuMobile()" class="fas fa-bars"></i><ul id="Lista_Nav"><li><a id="Goodbikes"href="/">Goodbikes</a></li><li class="ocultoMovil"><a href="/users/login" id="Header_logIn_Out">Login</a></li><li class="ocultoMovil"><a href="/users/register" id="Header_register_Out">Registrate</a></li><hr class="ocultoMovil"><li><a href="/products/productSearch/Rodados">Rodados</a></li><li><a href="/products/productSearch/Equipamiento">Equipamiento</a></li><li><a href="/products/productSearch/Indumentaria">Indumentaria</a></li><li><a href="/products/productSearch/Accesorios">Accesorios</a></li><li><a href="/products/productSearch/Taller">Taller</a></li></ul></nav>'
    document.getElementById("container_header_Mobile_logged").style.display='none';
    

    


}
else
{}
    