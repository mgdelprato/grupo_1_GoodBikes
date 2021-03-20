import React from 'react';


function PresentationText(props){
    return(
      <div>
        <h1 className='H2' id='Presentación'>Presentación</h1>
      <ol>
      <li> Home</li>
      <ul>
        <li>E-Commerce Goodbike Web/Mobile </li>
      </ul>
      <li>Funcionalidades</li>

          <ul>
            <li>Registrar usuario </li>
            <li>Login con recordame </li>
            <li>search de productos </li>
            <li>BREAD de productos </li>
            <li>Base de datos </li>
            <li>Carrito </li>
            <li>404 </li>
            <li>Dashboard</li>
            <li>API</li>
          </ul>
      <li>Registrar un usuario</li> 
        <ul>
          <li>Contar validaciones Front y Back</li>
          <li>Crear el usuario</li>
        </ul>
      <li>Loguearse con el usuario creado</li>
          <ul>
            <li>Actualizar perfil usuario creado</li>
            <li>Mostrar funcionalidad "Recordame"</li>
            <li>Comprar un producto (Funcionalidad carrito)</li>
            <li>Mostrar Compras en perfil</li>
          </ul>
      <li>Funcionalidad search de productos y mostrar cada categoria</li>
      <li>Loguearse con el Admin</li>
          <ul>
            <li>Hacer ABM de productos. Siempre que se haga alguna accion mostrar en el dashboard el cambio</li>
          </ul>
      <li>Mostrar 404</li>
      </ol>
      </div>
      
    )
}

export default PresentationText