import React from 'react'
import ItemDetail from './ItemDetail'

import { useParams } from 'react-router-dom'

function ItemDetailContainer() {
  const { tipoCalzado, modelo } = useParams()

  return (
    <div>
      <ItemDetail id = {modelo} />
    </div>
  )
}

export default ItemDetailContainer