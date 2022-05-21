import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import VinylCard from "./VinylCard"
import { Item as VinylData } from "./Item"

const ItemListContainer = () => {

  let [vinyls, setItem] = useState([])
  const { gen } = useParams()
  const [cargando, setCargando] = useState( [] )
  
  useEffect( ()=>{
    const getItems = new Promise( (resolve,reject) => {
      setCargando(true)
      setTimeout(() => {
            if (gen) {
                console.log('Hay itemCat')
                console.log(gen)
                resolve(VinylData.filter( i =>i.genere === gen))
                reject('error')
            } else {
                resolve(VinylData)
                console.log('NO hay itemCat')
            }
      }, 2000)
    })
    
    getItems.then( data => {
        setCargando(false)
        setItem(data)
        console.log(vinyls)
      })
  }, [gen])

  return (
    <div class="flex w-full flex-wrap justify-center items-stretch mt-10">
      {cargando ?
      <div class="flex w-screen items-center justify-center space-x-2">
        <svg role="status" class="inline w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-yellow-400" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
            
        </svg>      
      </div>
      :
       vinyls.map( i => <VinylCard key={i.id} VinylData={i}/>)
      }
    </div>
  )
}
export default ItemListContainer