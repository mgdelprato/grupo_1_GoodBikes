import './App.css';
import Home from './assets/components/Home';
import Presentation from './assets/components/Presentation';


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";



function App() {
return(
  <Router>
  
        <Switch>
              <Route exact path="/">
                <Home />
              </Route>
        </Switch>
        <Switch>
              <Route exact path="/Presentation">
                <Presentation />
              </Route>
        </Switch>

  </Router>
)




}



export default App;
