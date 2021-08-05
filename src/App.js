import './App.scss';
import Cartpage from './Pages/Cartpage';
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import Homepage from './Pages/Homepage';
import CartContextProider from './Context/CartContext';



function App() {

  return (
<CartContextProider>


    <BrowserRouter>

    <Switch>
           <Route exact path='/' component={Homepage} />
           <Route exact path='/Cart' component={Cartpage} />
  </Switch>
  </BrowserRouter>
  </CartContextProider>
  );
}

export default App;
