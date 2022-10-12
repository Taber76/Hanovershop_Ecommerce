import './App.css'

import { BrowserRouter, Routes, Route} from 'react-router-dom'
import { useState } from 'react'

import NavBar from './components/nav/NavBar'
import Home from './components/routes/Home'
import Calzado from './components/routes/Calzado'
import ItemDetailContainer from './components/pages/detail/ItemDetailContainer'
import Cart from './components/pages/cart/Cart'
import Footer from './components/footer/Footer'

import { CartProvider } from './components/contexts/CartContext'


function App() {

  return (
    <BrowserRouter>
      <CartProvider>
      <NavBar/>
        <Routes>
          <Route exact path='/' element={<Home />} /> 
          <Route exact path='/calzado' element={<Home />} /> {/* ruteo aqui porque el home tambien muestra todo el calzado*/} 
          <Route exact path='/calzado/:tipoCalzado' element={<Calzado />} />
          <Route exact path='/calzado/:tipoCalzado/:modelo' element={<ItemDetailContainer />} />
          <Route exact path='/cart' element={<Cart />} />
        </Routes>
      </CartProvider>
      <Footer/>
    </BrowserRouter>    
  )
}

export default App;
