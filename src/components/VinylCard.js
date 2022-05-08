import { Link } from "react-router-dom"

const VinylCard = ( {VinylData} ) => {
    return (
      <div className="card card-compact w-96 bg-base-100 shadow-xl">
          
          <div class="card-body">
    <h2 class="card-title">{VinylData.name}</h2>
    <h3 class="card-title">{VinylData.Artista}</h3>
    {VinylData.pictureurl}
    <p>{VinylData.price}</p>
    <div class="card-actions justify-end">
    <button class="btn btn-primary"><Link to={`/vinyls/${VinylData.id}`}>Mas información</Link></button>
    </div>
  </div>
      </div>
    )
  }
  export default VinylCard