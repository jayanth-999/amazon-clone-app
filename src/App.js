import './App.css';
import Checkout from './Components/Checkout/Checkout';
import DisplayContent from './Components/DisplayContent/DisplayContent';
import MainPage from './Components/HomePage/MainPage';
import NavBar from './Components/NavBar/Navigation';
import PlaceOrder from './Components/PlaceOrder/PlaceOrder';

function App() {
  return (
    <div className="App">
      {/* <p>I am Jayanth</p> */}
      <NavBar/>
      {/* <MainPage/> */}
      {/* <DisplayContent/> */}
      {/* <PlaceOrder/> */}
      <Checkout/>
    </div>
  );
}

export default App;
