import './CartWidget.css'
import { Bag } from 'react-bootstrap-icons'

import { useContext } from "react"

import { CartContext } from '../contexts/CartContext'

const CartWidget = () => {

  const { carrito } = useContext(CartContext)

  return (
    <div>
      <Bag className="bolsaCompras"/>
      <p>{carrito.length}</p>
    </div>
  )
}

export default CartWidget