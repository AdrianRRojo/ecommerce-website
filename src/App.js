
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Navbar from './components/navbar';
import { Login } from "./pages/Login";
import { Signup } from "./pages/Signup"
import {Shop} from './pages/shop/shop';
import Cart from './pages/cart/cart';
import About from './pages/about/about'
import ShopContextProvider from './context/shopContext';


function App() {
  return (
    <div className="App">
      <ShopContextProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Shop />} />
          <Route path='/login' element={<Login />} />
          <Route path='signup' element={<Signup/>}/>
          <Route path='/cart' element={<Cart />} />
          <Route path='/about' element={<About />} />
        </Routes>
      </Router>
      </ShopContextProvider>
    </div>
  );
}

export default App;
