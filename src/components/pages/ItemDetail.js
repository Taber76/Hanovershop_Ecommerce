import { useState, useEffect } from "react"

import React from 'react'
import ItemCount from "./ItemCount"
import { useParams } from "react-router-dom"


const ItemDetail = () => {
  const { tipoCalzado, modelo } = useParams()

  const [stock, setStock] = useState(10)
  const [ele, setEle] = useState(0)

  const modificoStock = (stockInicial, cantidad) => {
    setStock(stockInicial - cantidad)
  }
  
  useEffect(() => {
    fetch("/calzado.json") 
    .then((response) => response.json())
    .then((data) => {
      setTimeout(() =>  {   // simulo retardo de 1s en respuesta
        setEle(data.filter( elem => elem.id == modelo)[0])
      } ,1000)
    })
  }, [])


  return (
    <div className='container border'>
    {ele == 0 ?
      <div className='col mx-auto badge bg-secondary'>CARGANDO...</div>:
      <div className='row row-cols-1 row-cols-xl-2'> 
        <div className='col fotoPrincipal'>
          <img className="img-fluid" src={ele.colores[0]} alt='foto principal del zapato'/>
        </div>
        <div className='col detalles'>
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
            {ele.stock.map((stk, index) => (
              <div className="badge bg-primary border text-center m-2 col-1" key={index}>{stk.talle}</div>
            ))}
          </div>
          <hr></hr>
          <ItemCount stock = {stock}
                   onAdd = {modificoStock}/>
        </div>
      </div>
    }
    </div>
  )
}

export default ItemDetail