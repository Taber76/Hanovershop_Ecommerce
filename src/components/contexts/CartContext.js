import React, { useEffect, useState } from 'react'

const CartContext = React.createContext()


const CartProvider = ({ children }) => {

  const [ carrito, setCarrito ] = useState([])
  const [ cartItems, setCartItems ] = useState(0) // numero de items en el carrito
  const [ cartValue, serCartValue ] = useState(0)

  useEffect(() => {
    setCartItems(carrito.reduce((acc, ele) => acc + ele.cantidad,0,))
    serCartValue(carrito.reduce((acc, ele) => acc + ele.cantidad * ele.precio,0,))
  },[carrito])


  const clearCart = () => setCarrito([])

  const clearItem = (id) => setCarrito(carrito.filter((item) => item.id !== id))

  const isInCart = (id) => carrito.find((item) => item.id === id) ? true : false

   
  const addItem = (item) => {
    const indexItem = `${item.id}-${item.color}-${item.talle}` // talle == item.stock[item.talle].talle  
    if (isInCart(indexItem)) {
      setCarrito( carrito.map((ele) => 
        ele.id == indexItem ? {...ele, cantidad: ele.cantidad + item.cantidad } : ele 
      ))
    } else {
      setCarrito([...carrito, {"id": indexItem,
                                "idProducto": item.id,
                                "marca": item.marca,
                                "modelo": item.modelo,
                                "foto": item.foto,
                                "precio": item.precio,
                                "color": item.color,
                                "talle": item.talle,
                                "talleId": item.talleId,
                                "cantidad": item.cantidad}])
      }  
  }
  
  return (
    <CartContext.Provider  value={{carrito, addItem, cartItems, clearCart, clearItem, cartValue}}>
      {children}
    </CartContext.Provider>
  )
} 

export { CartContext, CartProvider }