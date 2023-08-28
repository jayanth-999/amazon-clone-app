import './App.css';
import Checkout from './Components/Checkout/Checkout';
import DisplayContent from './Components/DisplayContent/DisplayContent';
import MainPage from './Components/HomePage/MainPage';
import NavBar from './Components/NavBar/Navigation';
import PlaceOrder from './Components/PlaceOrder/PlaceOrder';
import { BrowserRouter as Router,Routes, Route} from "react-router-dom";
import CartContextProvider from './Components/CartContext';


function App() {
  return (
    <Router>
      <CartContextProvider>
        <div className="App">
          <NavBar/>
          <Routes>
            <Route path='/amazon-clone-app/' element={<MainPage/>}/>
            <Route path='/amazon-clone-app/display' element={<DisplayContent/>}/>
            <Route path='/amazon-clone-app/order/:id' element={<PlaceOrder/>}/>
            <Route path='/amazon-clone-app/checkout' element={<Checkout/>}/>
          </Routes>
        </div>
      </CartContextProvider>
    </Router>
  );
}

export default App;
