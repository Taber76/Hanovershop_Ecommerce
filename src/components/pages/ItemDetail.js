import { useState } from "react"

import React from 'react'
import ItemCount from "./ItemCount"


const ItemDetail = ({ ele }) => {

  const [stock, setStock] = useState(10)

  const modificoStock = (stockInicial, cantidad) => {
    setStock(stockInicial - cantidad)
  }

  return (
    <div className='container border'>
      <div className='row'>
        <div className='col-6 fotoPrincipal'>
          <img src={ele.colores[0]} alt='foto principal del zapato'/>
        </div>
      <div className='col-5 detalles'>
      <div className='row fs-1 text-uppercase fw-bold'>{ele.marca}</div>
        <div className='row text-uppercase fw-bold'>{ele.modelo}</div>
        <div className='row fs-2 fw-bold'>${ele.precio}</div>
        <hr></hr>
        <div className='row'>
          {ele.colores.map((color, index) => (
            <img className="itemColores border m-1 col-2" src={color} key={index} alt='opciones de colores de zapato'/>
          ))}
        </div>
        <div className='row mx-auto'>
          {ele.stock.map((talle, index) => (
            <div className="badge bg-primary border text-center m-2 col-1" key={index}>{talle.talle}</div>
          ))}
        </div>
        <hr></hr>
        <ItemCount stock = {stock}
                 onAdd = {modificoStock}/>
      </div>
      </div>
    </div>
  )
}

export default ItemDetail