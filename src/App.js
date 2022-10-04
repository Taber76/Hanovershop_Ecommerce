import './App.css'

import { BrowserRouter, Routes, Route} from 'react-router-dom'

import NavBar from './components/nav/NavBar'
import Home from './components/routes/Home'
import Calzado from './components/routes/Calzado'
import ItemDetail from './components/pages/ItemDetail'
import Footer from './components/footer/Footer'


function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route exact path='/' element={<Home />} /> 
        <Route exact path='/calzado' element={<Home />} /> {/* ruteo aqui porque el home tambien muestra todo el calzado*/} 
        <Route exact path='/calzado/:tipoCalzado' element={<Calzado />} />
        <Route exact path='/calzado/:tipoCalzado/:modelo' element={<ItemDetail />} />
      </Routes>
      <Footer/>
    </BrowserRouter>    
  )
}

export default App;
