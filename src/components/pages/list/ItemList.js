import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import Item from './Item'
import LoadingSpiner from '../../loadingspiner/LoadingSpiner'

const ItemList = () => {

  const[calzado, setCalzado] = useState([])
  
  useEffect(() => {
    fetch("./calzado.json") 
    .then((response) => response.json())
    .then((data) => {
      setTimeout(() =>  {   // simulo retardo de 2s en respuesta
        setCalzado(data)
      } ,2000)
    })
  }, [])

  
  return (
    <div className='container'>
      <div className='row row-cols-1 row-cols-sm-2 row-cols-md-3'>
      {calzado.length == 0 ? 
        <LoadingSpiner/>
        : calzado.map((ele) => (
        <div className='col'>
          <Link className="" to={`/calzado/${ele.genero}/${ele.id}`}>
            <Item ele={ele} key={ele.id}/>
          </Link>        
        </div>     
      ))}
      </div>
    </div>
  )
}

export default ItemList