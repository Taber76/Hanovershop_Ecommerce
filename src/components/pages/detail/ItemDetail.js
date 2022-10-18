import './ItemDetail.css'

import { useState, useContext } from "react"
import { Link } from 'react-router-dom'

import ItemCount from "./ItemCount"

import { CartContext } from '../../contexts/CartContext'


const ItemDetail = ({ item }) => {

  const { addItem } = useContext(CartContext)

  const [stock, setStock] = useState(10)
  const [color, setColor] = useState(0)
  //const [talle, setTalle] = useState()

  const modificoStock = (stockInicial, cantidad) => {  
    addItem([item.id, color, cantidad]) // contexto
    setStock(stockInicial - cantidad)
  }
   
  const colorHandle = (ev) => {
    setColor(parseInt(ev.target.id))
  }
  

  return (
    <div className=''>
    
      <div className='row row-cols-1 row-cols-xl-2'>       
        
        <div className='col'>
          <img className="img-fluid" src={item.colores[color]} alt='foto principal del zapato'/>
        </div>
        
        <div className='col detalles'>
          
          <div className='row fs-1 text-uppercase fw-bold'>{item.marca}</div>
          <div className='row text-uppercase fw-bold'>{item.modelo}</div>
          <div className='row fs-2 fw-bold'>${item.precio}</div>
          
          <hr></hr>
          
          <div className='row'>
            {item.colores.map((color, index) => (
              <img id={index} className="itemColores border m-1 col-2" src={color} key={index} onClick={colorHandle} alt='opciones de colores de zapato'/>
            ))}
          </div>
          
          <div className='row mx-auto'>
            {item.stock.map((stk, index) => (
              <div className="badge bg-primary border text-center m-2 col-1" key={index}>{stk.talle}</div>
            ))}
          </div>
          
          <hr></hr>
          
          <div className='container text-center contenedorCantidadDeArticulo'> 
            <ItemCount stock = {stock}
                       onAdd = {modificoStock}/>
            <Link className="row justify-content-center py-1" to={`/cart`}>
              <button className='badge col-7 fs-6 bg-success mx-auto btnPagar'>Pagar</button>
            </Link>
            <div className='row justify-content-center'>
              <p className='col-7 badge bg-success text-end'>Stock: {stock}</p>
            </div>
          </div>
        </div>
      </div>
    
    </div>
  )
}

export default ItemDetail