//import logo from './logo.svg';
import './App.css';
import ConsultaApi from './components/ConsultaApi';
import Hook from './components/Hook';

import {BrowserRouter ,Route ,Link} from 'react-router-dom'


function App() {
  return (
    <div className="App">
        
       
        <BrowserRouter>

              <ul>
                <Link className="li" to="/">Hook</Link>
                <Link className="li" to="/consulta">Consulta Api con Hook</Link>
              </ul>


              <Route exact path="/" component={Hook} />
              <Route path="/consulta" component={ConsultaApi}/>

        </BrowserRouter>
    </div>
  );
}

export default App;
