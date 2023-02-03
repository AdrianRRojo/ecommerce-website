
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Navbar from './components/navbar';
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' />
          <Route path='/cart' />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
