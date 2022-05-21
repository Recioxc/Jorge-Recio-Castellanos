import { useContext } from "react"
import { Link } from "react-router-dom"
import { cartContext } from "../Context/CartContext"
import ItemCount from "./ItemCount"

const VinylCard = ( {VinylData} ) => {
    
  const {addItem} = useContext(cartContext)
    
    function handleOnAdd(count) {
        addItem(VinylData, count);
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
    <ItemCount stock={VinylData.stock} initial={1} onAdd={handleOnAdd}/>
    </div>
  </div>
      </div>
    )
  }
  export default VinylCard