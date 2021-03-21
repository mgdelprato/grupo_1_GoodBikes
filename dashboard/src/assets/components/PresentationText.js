import React from 'react';
//import gbResourses from '../../../requests/gbResourses';
import Nagu from '../images/Nagu.JPG'
import Nano from '../images/Nano.JPG'
import Maurito from '../images/Maurito.JPG'
import DER from '../images/DER.png'

function PresentationText(props){
    return(
      <div > 
                  
          <h1 className="H2" id="Presentacion">Nosotros</h1>
          
          <div className="container">
              <div className="row">
                <div className="col-4">
                <figure className="figure">
                      <img id='Perfil' img src={Nagu} className="figure-img img-fluid rounded" alt="Imagen"/>
                      <figcaption id='resaltado' className="figure-caption text-left strong">Nagu</figcaption>
                      <figcaption className="figure-caption text-left">Googleador Senior.</figcaption>
                      <figcaption className="figure-caption text-left">Entusiasta del mate amargo.</figcaption>
                </figure>
                </div>
                <div className="col-4">
                <figure className="figure">
                      <img id='Perfil' img src={Nano} className="figure-img img-fluid rounded" alt="Imagen"/>
                      <figcaption id='resaltado' className="figure-caption text-left">Nano</figcaption>
                      <figcaption className="figure-caption text-left">El Motor del equipo.</figcaption>
                      <figcaption className="figure-caption text-left">Es Alfa y Omega.</figcaption>
                </figure>
                </div>
                <div className="col-4">
                      <figure className="figure">
                      <img id='Perfil' img src={Maurito} className="figure-img img-fluid rounded" alt="Imagen"/>
                      <figcaption id='resaltado' className="figure-caption text-left">Maurito</figcaption>
                      <figcaption className="figure-caption text-left">Garra Eterna.</figcaption>
                      <figcaption className="figure-caption text-left">Multitasking Infinito.</figcaption>
                      </figure>

                </div>
              </div>
            </div>

            <h3 id="Presentacion">Presentación</h3>
          <ol>
              <li > Home</li>
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
     
      
              <h3 id="Presentacion">Base de Datos</h3>

              <div className="row">
                <div className="col">
                <figure id='imagen' className="figure">
                      <img id='DER' img src={DER} className="mx-auto d-block" alt="Imagen"/>
                      <figcaption id='resaltado' className="figure-caption text-left">Diagrama Entidad Relación.</figcaption>
                      
                </figure>
                </div>
                </div>


                <h3 id="Presentacion">API</h3>

                <ul>
                    <a target='a_blank' href='http://localhost:5000/api/products'><li>Productos</li></a>
                    <a target='a_blank' href='http://localhost:5000/api/users'><li>Usuarios</li></a>
                </ul>


      </div>
      
    )
}

export default PresentationText