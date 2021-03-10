import './App.css';
import Sidebar from './assets/components/Sidebar';
import TheHead from './assets/components/TheHead';
import Container from './assets/components/Container';
import Categories from './assets/components/Categories';
import MeasuresFunc from './assets/components/MeasuresFunc';
import TheFoot from './assets/components/TheFoot';
import LastProduct from './assets/components/LastProduct';



function App() {
  return (

    <div id="wrapper">
        <Sidebar/>
              
          <div id="content-wrapper" className ="d-flex flex-column">
            <div id="content">
                 
            <TheHead/>

            <div className ="container-fluid">

                    <div className ="d-sm-flex align-items-center justify-content-between mb-4">
                      <h1 className ="h3 mb-0 text-gray-800">App Dashboard</h1>
                    </div>
 
                    <div className ="row">
                      <MeasuresFunc/>
                    </div>

     
                    <div className ="row">
                     
                      <Container text = "Último producto agregado" classDetails = "card-body">
                                     <LastProduct/>
                                     
                      </Container>


                      <Container text = "Categorias existentes" classDetails = "row">
                                      <Categories/>
                      </Container>
                    </div>

            </div>
          </div>
    
        <TheFoot/>
                

        </div>
      </div>

  );
}

export default App;
