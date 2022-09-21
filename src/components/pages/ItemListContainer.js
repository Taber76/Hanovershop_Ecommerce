
const ItemListContainer = (props) => {
  return (
    <div>
      <h1 className='btn btn-warning btn-lg col-6 m-1 mt-3 p-4'>{props.greeting1}</h1>
      <h1 className='btn btn-warning btn-lg col-6 m-1 p-4'>{props.greeting2}</h1>
    </div>
  )
}

export default ItemListContainer