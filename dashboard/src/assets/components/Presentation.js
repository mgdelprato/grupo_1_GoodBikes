import Sidebar from './Sidebar';
import TheHead from './TheHead';
import Container from './Container';
import Categories from './Categories';
import MeasuresFunc from './MeasuresFunc';
import TheFoot from './TheFoot';
import LastProduct from './LastProduct';
import PresentationText from './PresentationText'

function Home(props){
  return(
      <div id="wrapper">
          
          <Sidebar/>
            
            <div id="content-wrapper" className ="d-flex flex-column">
              <div id="content">
              <TheHead/>            
             

              <PresentationText />
             
                  

          </div>
          
          <TheFoot/>
          </div>
      </div>
  )   
}


export default Home