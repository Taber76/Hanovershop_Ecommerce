import React, { useState } from 'react'

const CartContext = React.createContext()


const CartProvider = ({ children }) => {
  const[carrito, setCarrito] = useState([])

  const addItem = (item) => {
    setCarrito([...carrito, {"id":item[0], "color":item[1], "cantidad":item[2]}])
  }

  return (
    <CartContext.Provider  value={{carrito, addItem}}>
      {children}
    </CartContext.Provider>
  )
 }


export { CartContext, CartProvider }