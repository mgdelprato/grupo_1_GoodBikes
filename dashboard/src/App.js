import './App.css';
import Categories from './Categories';
import Measures from './Measures';
import Container from './Container';
import NavItems from './NavItems';




function App() {
  return (

              <div id="wrapper">

              <ul className ="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
                  
                  <a className ="sidebar-brand d-flex align-items-center justify-content-center" href="/">
                    <div className ="sidebar-brand-icon">
                      <i className ="fas fa-chart-line"></i>
                    </div>
                    <div className ="sidebar-brand-text mx-3">Admin</div>
                  </a>

                
                  <hr className ="sidebar-divider my-0"/>              
                  <NavItems classOne="nav-item active" classTwo="nav-link" classThree="fas fa-fw fa-tachometer-alt" text = "Dashboard" />
                        <hr className ="sidebar-divider"/>
                        <div className ="sidebar-heading">Actions</div>

                  <NavItems classOne="nav-item" classTwo="nav-link collapsed" classThree="fas fa-fw fa-folder" text = "Pages" />
                  <NavItems classOne="nav-item" classTwo="nav-link" classThree="fas fa-fw fa-chart-area" text = "Charts" />                
                  <NavItems classOne="nav-item" classTwo="nav-link" classThree="fas fa-fw fa-table" text = "Tables" />                

                  <hr className ="sidebar-divider d-none d-md-block"/>
              </ul>
              
              <div id="content-wrapper" className ="d-flex flex-column">

                
              <div id="content">
                 
              <nav className ="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">

                    <button id="sidebarToggleTop" className ="btn btn-link d-md-none rounded-circle mr-3">
                      <i className ="fa fa-bars"></i>
                    </button>

                    
                    <ul className ="navbar-nav ml-auto">

                    
                      <li className ="nav-item dropdown no-arrow mx-1">
                        <a className ="nav-link dropdown-toggle" href="/" id="alertsDropdown">
                          <i className ="fas fa-bell fa-fw"></i>
                          
                          <span className ="badge badge-danger badge-counter">3+</span>
                        </a>
                      </li>

                      
                      <li className ="nav-item dropdown no-arrow mx-1">
                        <a className ="nav-link dropdown-toggle" href="/" id="messagesDropdown">
                          <i className ="fas fa-envelope fa-fw"></i>
                          
                          <span className ="badge badge-danger badge-counter">7</span>
                        </a>
                      </li>

                      <div className ="topbar-divider d-none d-sm-block"></div>

                      
                      <li className ="nav-item dropdown no-arrow">
                        <a className ="nav-link dropdown-toggle" href="/" id="userDropdown">
                          <span className ="mr-2 d-none d-lg-inline text-gray-600 small">Walter White</span>
                          <img className ="img-profile rounded-circle" src={'assets/images/dummy-avatar.jpg'} width="60"/>
                        </a>
                      </li>

                    </ul>

                </nav>
                  

                  
                  <div className ="container-fluid">

                    <div className ="d-sm-flex align-items-center justify-content-between mb-4">
                      <h1 className ="h3 mb-0 text-gray-800">App Dashboard</h1>
                    </div>
 
                    <div className ="row">
                      <Measures/>
                    </div>

     
                    <div className ="row">
                      <Container text = "Last product in Data Dase" classDetails = "card-body">
                                      <div className ="text-center">
                                      <img className ="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: 25 + 'rem'}} src="assets/images/product_dummy.svg" alt="image dummy"/>
                                      </div>
                                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, consequatur explicabo officia inventore libero veritatis iure voluptate reiciendis a magnam, vitae, aperiam voluptatum non corporis quae dolorem culpa exercitationem ratione?</p>
                                      <a target="_blank" rel="nofollow" href="/">View product detail</a>
                      </Container>
                      <Container text = "Categories in Data Base" classDetails = "row">
                                      <Categories/>
                      </Container>
                    </div>

                  </div>
                </div>
              

                
                <footer className ="sticky-footer bg-white">
                  <div className ="container my-auto">
                    <div className ="copyright text-center my-auto">
                      <span>Copyright &copy; Dashboard 2020</span>
                    </div>
                  </div>
                </footer>
                

              </div>
              

            </div>











  );
}

export default App;
