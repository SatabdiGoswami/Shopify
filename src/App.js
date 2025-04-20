import './App.css';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import Home from './Components/Home';
import About from './Components/About';
import Category from './Components/Category';
import Wardrove from './Components/Wardrove';

function App() {
  return (
    <Router>
    
      <Routes>
          <Route path='/' element={<Home/>} />   
          <Route path='/about' element={<About/>} />
          <Route path='/wardrove' element={<Wardrove/>} />
          <Route path="/category" element={<Category />} /> 
      </Routes>
      

    </Router>
  );
}

export default App;
