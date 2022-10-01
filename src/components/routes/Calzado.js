import { useEffect, useState  } from 'react'
import { useParams, Link } from 'react-router-dom'

import Item from '../pages/Item'

const Calzado = () => {
  const { tipoCalzado } = useParams()
  const[calzado, setCalzado] = useState([])
 
  useEffect(() => {
    fetch("../calzado.json") 
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
        <div className='col mx-auto badge bg-secondary'>CARGANDO...</div>
        : calzado.filter( ele => ele.genero == tipoCalzado ).map( elefil => (
        <div className='col'>
          <Link className="" to={`/calzado/${tipoCalzado}/${elefil.id}`}>
            <Item ele={elefil} key={elefil.id}/>
          </Link>
        </div>     
      ))}
      </div>
    </div>
  )
}

export default Calzado