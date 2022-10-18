import { useState, useEffect } from 'react'
import { getFirestore, collection, getDocs } from 'firebase/firestore'

import ItemList from "./ItemList"
import LoadingSpiner from '../../loadingspiner/LoadingSpiner'

const ItemListContainer = () => {

  const[calzado, setCalzado] = useState([])
  
  useEffect(() => {
    const db = getFirestore()
    const itemsCollection = collection(db, 'calzadoList')
    getDocs(itemsCollection).then((snapshot) => {
      const arrproducts = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setCalzado(arrproducts)
    })
  }, [])
  
  
  return (
    <div className="container">
      <div className='row row-cols-1 row-cols-sm-2 row-cols-md-3'>
      {calzado.length == 0 ?
        <LoadingSpiner/>
        : calzado.map((ele) => (       
            <div className='col'>
              <ItemList item = {ele}/>
           </div> 
        ))}
      </div>   
    </div>
  )
}

export default ItemListContainer