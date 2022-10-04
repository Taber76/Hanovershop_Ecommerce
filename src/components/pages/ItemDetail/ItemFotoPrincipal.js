import React from 'react'

function ItemFotoPrincipal({ enlace }) {
  return (
    <div className='col'>
      <img className="img-fluid" src={enlace} alt='foto principal del zapato'/>
    </div>
  )
}

export default ItemFotoPrincipal