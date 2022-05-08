import { useEffect, useState } from "react";
import { Item as VinylData } from "./Item";
import VinylCard from "./VinylCard";

const VinylContainer = () => {

  const [Item, setVinyl] = useState([])

  useEffect(() => {
    const getVinyl = new Promise( (resolve, reject) => {
      setTimeout( () =>{
        resolve(VinylData)
         }, 2000)
    })

    getVinyl.then( (result) => {
      
      setVinyl(result)
    
    })

    
  }, [])

  return (
    <div>
      {Item.map( Item => <VinylCard key={Item.id} VinylData={Item}/> )}
    </div>
  )
}
export default VinylContainer