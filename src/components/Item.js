
import {Link} from 'react-router-dom'


export const Item = ({Name,Artist,img,id,Price}) => {

    return (
        <div className="card w-96 bg-base-100 shadow-xl">
          
        <div class="card-body">
  <h2 class="card-title">{Name}</h2>
  <h3 class="card-title">{Artist}</h3>
  <img src={img} className="img" alt={Name}/>
  <p>{Price}</p>
  <div class="card-actions justify-end">
  <button class="btn btn-primary"><Link to={`/vinyls/${id}`}>Mas información</Link></button>
  
  </div>
</div>
    </div>
    )
}