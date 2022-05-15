import { useContext } from "react"
import { Link } from "react-router-dom"
import { CartContext } from "../Context/CartContext"
import ItemCount from "./ItemCount"
import { Item } from "./Item"

const VinylCard = ( {VinylData} ) => {
    
  const {addItem} = useContext(CartContext)
 
  const onAdd = (qty) => {
    addItem(Item, qty)
  }
  return (
      <div className="card w-96 bg-base-100 shadow-xl">
          
          <div class="card-body">
    <h2 class="card-title">{VinylData.name}</h2>
    <h3 class="card-title">{VinylData.Artista}</h3>
    {VinylData.pictureurl}
    <p>{VinylData.price}</p>
    <div class="card-actions justify-end">
    <button class="btn btn-primary"><Link to={`/vinyls/${VinylData.id}`}>Mas información</Link></button>
    <button class="btn btn-primary" onClick={()=>addItem(VinylData.id)}>Agregar al carrito</button>
    <ItemCount stock={Item.stock} initial={1} onAdd={onAdd}/>
    </div>
  </div>
      </div>
    )
  }
  export default VinylCard