import { Link } from "react-router-dom"
import { useContext } from "react"
import CartContext from "../Context/CartContext"
import CartItem from "./CartCard"

export const CartView = () => {

   const {isInCart, cleancart, getTotalPrice, price, count} = useContext(CartContext)

   

   return (
       <div>
           <section>
               {isInCart.length > 0
               ?
                   <>
                       <h1 className='cart-title'>Carrito de compras</h1>
                       {isInCart.map((item) => (<CartItem key={item.id} {...item}/>))}
                       <h2 className='total-price'>Total: $ {getTotalPrice()}</h2>
                       <button onClick={cleancart}>Empty Cart</button>
                       <Link to='/checkout'><button>Go to Payment Method</button></Link>
                   </>
               :
                   <div className='empty-cart-container'>
                       <h1 className='empty-cart'>Your Cart is Empty...</h1>
                       <Link to='/' className='homepage'>seguir comprando </Link>
                   </div>
               } 
               
                   
           </section>
       </div>
   )
}