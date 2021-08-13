import './App.scss';
import Cartpage from './Pages/Cartpage';
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import Homepage from './Pages/Homepage';
import CartContextProider from './Context/CartContext';
import WishlistPage from './Pages/WishlistPage';
import Detail from './Pages/Detail';
import Checkout from './Pages/Checkout';
import Placed from './Pages/Placed';
import Auth from './Pages/Auth';
import Orders from './Pages/Orders';
import Category from './Pages/Category';



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
           <Route exact path='/Placed' component={Placed} />
           <Route exact path='/Auth' component={Auth} />
           <Route exact path='/Orders' component={Orders} />
           <Route exact path='/Category' component={Category} />
           
  </Switch>
  </BrowserRouter>
  </CartContextProider>
  );
}

export default App;
