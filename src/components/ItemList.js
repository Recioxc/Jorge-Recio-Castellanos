
import { Item as VinylData } from "./Item";

export const getVinyl = () => {
      return  new Promise( (resolve, reject) => {
      setTimeout( () =>{
        resolve(VinylData)
         }, 2000)
    })
  
};
