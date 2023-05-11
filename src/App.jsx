

import './App.css'
import Navbar from './Layout/Navbar'
import { BrowserRouter, Route, Routes ,Link } from 'react-router-dom'
import Home from './Pages/Home'
import Contact from './Pages/Contact'
import Services from './Pages/Services'
import ProductsList from './Component/ProductsList'

function App() {

  return (
    <>
    <Navbar/>
    <ProductsList/>
    <BrowserRouter>
      <Routes>
          <Route index element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />

      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
