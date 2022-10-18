import React from 'react'
import ItemDetail from './ItemDetail'

import { useParams } from 'react-router-dom'
import { useState, useEffect } from "react"
import { getFirestore, collection, getDocs } from 'firebase/firestore'
import LoadingSpiner from '../../loadingspiner/LoadingSpiner'


function ItemDetailContainer() {
  const { tipoCalzado, modelo } = useParams()

  const [item, setItem] = useState(0) // modelo seleccionado

  useEffect(() => {
    const db = getFirestore()
    const itemsCollection = collection(db, 'calzadoList')
    getDocs(itemsCollection).then((snapshot) => {
      const arrproducts = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setItem(arrproducts.filter(elem => elem.id == modelo)[0])
    })

  }, [])



  return (
    <div className='container border'>
    { !item ?
      <LoadingSpiner/>:
      <ItemDetail item = {item} />
    }  
    </div>

  )
}

export default ItemDetailContainer