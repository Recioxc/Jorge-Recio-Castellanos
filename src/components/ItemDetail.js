import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { Item as VinylData } from "./Item"


const VinylDetail = () => {

  const { VinylId } = useParams()
  const [Vinyl, setVinyl] = useState( {} )

  useEffect( () => {

    (async () => {
      const VinylData = await getVinylDetail()
      if (VinylData) {
        setVinyl(VinylData)
      }
    })()
    
  }, [VinylId])

  const getVinylDetail = () => {
    return new Promise( (resolve) => {
      setTimeout(() => {
        resolve( VinylData.find( v => v.id == VinylId) )
      }, 2000);
    })
  }
  
  return (
    <>
      <div className="card card-compact w-96 bg-base-100 shadow-xl">
          
          <div class="card-body">
    <h2 class="card-title">{Vinyl.name}</h2>
    <h3 class="card-title">{Vinyl.Artista}</h3>
    {Vinyl.pictureurl}
    <p>{Vinyl.price}</p>
    <button class="btn btn-primary">¡Compralo ahora!</button>
    <div class="card-actions justify-end">
      
      
    </div>
  </div>
      </div>

      
    </>
  )
}
export default VinylDetail