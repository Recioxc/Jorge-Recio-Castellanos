import { useEffect, useState } from "react";
import { Vinyl as VinylData } from "./data/Vinyls";
import VinylCard from "./VinylCard";

const VinylContainer = () => {

  const [Vinyl, setVinyl] = useState([])

  useEffect(() => {
    const getVinyl = new Promise( (resolve, reject) => {
      setTimeout( () =>{
        resolve(VinylData)
        // reject('error en la promesa')
      }, 2000)
    })

    getVinyl.then( (result) => {
      
      setVinyl(result)
    
    })

    
  }, [])

  return (
    <div>
      {Vinyl.map( Vinyl => <VinylCard key={Vinyl.id} VinylData={Vinyl}/> )}
    </div>
  )
}
export default VinylContainer