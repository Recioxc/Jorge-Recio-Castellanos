import { useContext, useState } from "react"
import { cartContext } from "../Context/CartContext"
import ItemCount from './ItemCount'
import { Link } from "react-router-dom"
 
export const ItemDetail = ({ id,img,Genere,Stock,Name,Artist,Price }) => {

    const [qty, setqty] = useState(0)

    const { addCart, isInCart } = useContext(cartContext)

    const handleAgregar = () => {
        if (qty === 0) return
        if (!isInCart(id)) {
            const addItem = {
                id, Name, Price, Stock, img,Artist,Genere
            }
            addCart(addItem);
        }
    }

    return (

        <div >
            <div >
                <img src={img} alt={Name} />
            </div>
            <div >
                <h3 className="title">{Name}</h3>
                <p className="desc">{Artist}</p>
                <p className="price">${Price}</p>
                {
                    isInCart(id)
                        ? <Link to="/cart">
                            <button class="btn btn-outline btn-primary">Terminar Compra</button>
                        </Link>
                        :
                        <>
                            <ItemCount max={Stock} counter={qty} setCounter={setqty} />
                            
                                text="agregar al carrito"
                                fct={handleAgregar}
                                disabled={qty === 0}
                            
                        </>
                }
            </div>
        </div>
    )
    
}