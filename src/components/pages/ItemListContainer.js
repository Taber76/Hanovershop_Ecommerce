import { useState } from "react"

import ItemList from "./ItemList" 


const ItemListContainer = ({greeting}) => {
  
  return (
    <div>
      <h1 className='btn btn-primary btn-lg col-6 m-1 mt-3 p-4'>{greeting}</h1>
      <ItemList />
    </div>
  )
}

export default ItemListContainer