import Sidebar from './Sidebar';
import TheHead from './TheHead';
import Container from './Container';
import Categories from './Categories';
import MeasuresFunc from './MeasuresFunc';
import TheFoot from './TheFoot';
import LastProduct from './LastProduct';

function Home(props){
  return(
      <div id="wrapper">
          <Sidebar/>
                
            <div id="content-wrapper" className ="d-flex flex-column">
              <div id="content">
                  
              <TheHead/>

              <div className ="container-fluid">

                      <div className ="d-sm-flex align-items-center justify-content-between mb-4">
                        <h1 className ="h3 mb-0 text-gray-800">GoodBikes Dashboard</h1>
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
  )   
}


export default Home