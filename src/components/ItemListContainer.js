
import { useEffect, useState } from "react";
import { Item as VinylData } from "./Item";
import { getVinyl } from "./ItemList";
import VinylCard from "./VinylCard";

const ItemListContainer = () => {

   const [Item, setVinyl] = useState([])

  useEffect(() => {
     getVinyl()
      .then((result) =>setVinyl(result))
      .catch((error)=>console.log(error))

 },[]);

 return (
  <div>
    {Item.map( Item => <VinylCard key={Item.id} VinylData={Item}/> )}
  </div>
)
 }

 export default ItemListContainer