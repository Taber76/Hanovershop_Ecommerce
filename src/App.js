import './App.css'

import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import NavBar from './components/nav/NavBar'
import Home from './components/routes/Home'
import Calzado from './components/routes/Calzado'
import Item from './components/pages/Item'
import ItemDetail from './components/pages/ItemDetail'


function App() {
  return (
    <Router>
      <NavBar/>
      <Routes>
        <Route exact path='/' element={<Home />} /> 
        <Route exact path='/calzado' element={<Home />} /> {/* ruteo aqui porque el home tambien muestra todo el calzado*/} 
        <Route exact path='/calzado/:tipoCalzado' element={<Calzado />} />
        <Route exact path='/calzado/:tipoCalzado/:modelo' element={<ItemDetail />} />
      </Routes>
    </Router>    
  )
}

export default App;
