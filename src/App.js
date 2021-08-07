import './App.scss';
import Cartpage from './Pages/Cartpage';
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import Homepage from './Pages/Homepage';
import CartContextProider from './Context/CartContext';
import WishlistPage from './Pages/WishlistPage';
import Detail from './Pages/Detail';
import Checkout from './Pages/Checkout';



function App() {

  return (
<CartContextProider>


    <BrowserRouter>

    <Switch>
           <Route exact path='/' component={Homepage} />
           <Route exact path='/Cart' component={Cartpage} />
           <Route exact path='/Wishlist' component={WishlistPage} />
           <Route exact path='/Detail' component={Detail} />
           <Route exact path='/Checkout' component={Checkout} />


  </Switch>
  </BrowserRouter>
  </CartContextProider>
  );
}

export default App;
