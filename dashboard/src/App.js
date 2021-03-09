import './App.css';
import Sidebar from './assets/components/Sidebar';
import TheHead from './assets/components/TheHead';
import Container from './assets/components/Container';
import Categories from './assets/components/Categories';
import MeasuresFunc from './assets/components/MeasuresFunc';
import TheFoot from './assets/components/TheFoot';



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
    
        <TheFoot/>
                

        </div>
      </div>

  );
}

export default App;
