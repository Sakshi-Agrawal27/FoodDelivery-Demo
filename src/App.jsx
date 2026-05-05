import React,{useState} from 'react'
import HomePage from './Components/HomePage'
import Menu from './Components/Menu'
import About from './Components/About'
import Contact from './Components/Contact'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar'



function App() {
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [searchterm,setSearchterm] = useState("");

  return (
    <BrowserRouter>
      <Navbar
        cart={cart}
        setShowCart={setShowCart}
        searchterm={searchterm}
        setSearchterm={setSearchterm}
      />
      <Routes>

        <Route path="/" element={<HomePage
         cart={cart} 
         setCart={setCart} 
         showCart={showCart} 
         setShowCart={setShowCart} 
         searchterm={searchterm}
         setSearchterm={setSearchterm}
        />} />
        
        <Route path="/menu" element={<Menu searchterm={searchterm} setSearchterm={setSearchterm} />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App