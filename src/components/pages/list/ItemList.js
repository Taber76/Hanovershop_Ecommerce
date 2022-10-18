import { Link } from 'react-router-dom'

import Item from './Item'

const ItemList = ({item}) => {

  
  return (
    <div className=''>
      <Link className="" to={`/calzado/${item.genero}/${item.id}`}>
        <Item ele={item} key={item.id}/>
      </Link>        
    </div>
  )
}

export default ItemList