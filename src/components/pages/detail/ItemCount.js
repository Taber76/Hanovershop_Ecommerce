import './ItemCount.css'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const ItemCount = ({ stock, onAdd }) => {

  const [cantidad, setCantidad] = useState(0)

  const handleMas = () => {
    cantidad < stock && setCantidad( cantidad + 1 )
  }

  const handleMenos = () => {
    cantidad > 0 && setCantidad( cantidad - 1 ) 
  }

  const handleCarrito = () => {
    stock >= cantidad && onAdd ( stock, cantidad )
  }
  

  return (
      <div>  
        <div className='row justify-content-center'>     
          <button className='badge fs-5 bg-primary col-2 px-3' onClick={handleMenos}>-</button>
          <div className='col-3 align-middle numeroArticulos'>{cantidad}</div>
          <button className='badge fs-5 col-2 bg-primary' onClick={handleMas}>+</button>
        </div>   
        <div className='row justify-content-center py-1'>
          <button className='badge col-7 fs-6 bg-primary mx-auto' onClick={handleCarrito}>Agregar al carrito</button>
        </div>
      </div>  
  )
}

export default ItemCount