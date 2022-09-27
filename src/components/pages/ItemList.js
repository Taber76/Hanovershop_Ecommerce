import { useState, useEffect } from 'react'
import Item from './Item'
import ItemDetail from './ItemDetail'

const ItemList = () => {

  const[calzado, setCalzado] = useState([])
  
  useEffect(() => {
    fetch("./calzado.json")  //============= Fetch
    .then((response) => response.json())
    .then((data) => {
      setTimeout(() =>  {   // simulo retardo de 2s en respuesta
        setCalzado(data)
      } ,2000)
    })
  }, [])

  console.log(calzado)
  
  return (
    <div className='container'>
      <div className='row row-cols-1 row-cols-sm-2 row-cols-md-3'>
      {calzado.map((ele) => (
        <div className='col'>
          <Item ele={ele} key={ele.id}/>
        </div>     
      ))}
      </div>


      <div className='row'>
      {calzado.map((ele) => (
        <div className='col-12'>
          <ItemDetail ele={ele} key={ele.id}/>
        </div>     
      ))}
      </div>
      

    </div>
  )
}

export default ItemList