import React, { useState } from 'react'

const CartContext = React.createContext()


const CartProvider = ({ children }) => {

  const[carrito, setCarrito] = useState([])
  const[cartItems, setCartItems] = useState(0)

  const addItem = (item) => {
    if (carrito.findIndex((ele) => ele.index === `${item[0]}-${item[1]}`) == -1) { /*-1 si no esta en el carrito*/
      setCarrito([...carrito, {"index": `${item[0]}-${item[1]}`, "id":item[0], "color":item[1], "cantidad":item[2]}])
    } else {
      let aux = carrito
      aux[carrito.findIndex((ele) => ele.index === `${item[0]}-${item[1]}`)].cantidad += item[2]
      setCarrito(aux)
    }
    setCartItems(cartItems + item[2])  
  }

  return (
    <CartContext.Provider  value={{carrito, addItem, cartItems}}>
      {children}
    </CartContext.Provider>
  )
} 

export { CartContext, CartProvider }