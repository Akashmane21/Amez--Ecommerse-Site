import './App.scss';
import Home from './Amazon/Home' 
import Header from './header/Header';
import Leftmenu from './Components/Leftmenu/Leftmenu';
function App() {
  return (
    <div className="App">
     <Header />

     <div className="block">
       <div className="left_area">
        <Leftmenu />
       </div>
       <div className="right_area">
           <Home />
       </div>
     </div>
      
      
    </div>
  );
}

export default App;
