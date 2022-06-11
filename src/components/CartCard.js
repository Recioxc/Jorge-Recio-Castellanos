import { useContext } from "react";
import CartContext from "../Context/CartContext";

export const CartItem = ({img, name, id,  count, price}) => {

    const {removeFromCart, getTotalPrice} = useContext(CartContext)
    return (
        <div >
            <div className='cart-container'>
                <img src={img} alt='item' className='cart-img'></img>
                <div>
                    <h2 className='cart-name'>{name}</h2>
                </div>
                <div>
                    <h3 className='count'> x  {count}</h3>
                </div>
                <div>
                    <h2 className='cart-price'>${price}</h2>
                </div>
                <div>
                
                    <button onClick={() => {removeFromCart(id)}} className='delete'>
                        <FiTrash id='trash'/>
                    </button>
                  
                </div>
            </div>
            <hr className='separator'/>
        </div>
                
    )
}