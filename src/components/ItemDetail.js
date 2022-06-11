import { useContext, useState } from "react"
import { Link } from "react-router-dom"
import ItemCount from "./ItemCount"
import CartContext from "../Context/CartContext"

const ItemDetail = ( { product }) => {
 
  const [ quantity, setQuantity ] = useState(0)
  const { addItem } = useContext( CartContext )

  const addToCart = ( quantity ) => {
      if (quantity !== 0 ) {
          setQuantity( quantity )
          addItem( product, quantity)
          
  }
  }
  return (
      <article>
           <div className='container p-5 m-3 backgroundDetail'>
              <div className='row justify-content-center'>
              <h2> { product?.Name } </h2>
                  <div className='col col-md-6'>
                      <img className="card-img-top" src={product?.img} alt={product?.Name} />
                  </div>
                  <h3>  {product?.Artist} </h3>
                  <div className='col col-md-6'>
                     
                    
                      <p>  ${product?.Price } </p>
                      <div>
                      </div>
                      <div>
                          {
                              quantity === 0
                              ? <ItemCount product={product} onAdd={(quantity) => addToCart (quantity)} />
                              :   <div className="card mt-3 mb-3">
                                      <div className="card-body text-center">
                                          <small>Tienes <b>{quantity}</b> Vinyles en el carrito.</small><br />
                                          <Link to={'/cart'}>
                                              <button type="button" className="btn btn-primary m-2">Finalizar la Compra</button>
                                          </Link>
                                      </div>
                                  </div>
                          }
                      </div>
                  </div>

              </div>
          </div>
      </article>
  )
}

export default ItemDetail