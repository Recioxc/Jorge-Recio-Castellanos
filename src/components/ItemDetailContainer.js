import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { cartProvider } from "../Context/CartContext"
import { Item as VinylData } from "./Item"
import {getDetail} from  "./ItemDetail"


const ItemDetailContainer = () => {

  const { IdVinyl } = useParams()
  const [Vinyl, setDetail] = useState( {} )

    useEffect( () => {

      (async () => {
        const VinylData = await getDetail()
        if (VinylData) {
          setDetail(VinylData)
        }
      })()
      
    }, [IdVinyl])
  
  
  return (
    <>
    <cartProvider>
      <div className="card card-compact w-96 bg-base-100 shadow-xl">
          <div class="card-body">
    <h2  class="card-title">{Vinyl.name}</h2>
    <h3  class="card-title">{Vinyl.Artista}</h3>
    {Vinyl.pictureurl}
    <p>{Vinyl.price}</p>
    <button  class="btn btn-primary">¡Compralo ahora!</button>
    <div  class="card-actions justify-end">
    </div>
    </div>
    
      </div>
      
      </cartProvider>
    </>
  )
  }
export default ItemDetailContainer