import { useParams } from "react-router-dom";
import { Item as VinylData } from "./Item";
export const getDetail = () => {
    
    return  new Promise( (resolve) => {
    setTimeout( () =>{
      resolve( VinylData.find( v => v.id ) )
       }, 2000)
       
  })

}
    