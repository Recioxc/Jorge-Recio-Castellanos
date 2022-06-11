import React, {useContext} from 'react'
import { Link } from 'react-router-dom'
import CartContext from '../Context/CartContext'

export default function CartWidget(){

    const {getQuantity} = useContext(CartContext)
    
    return (
        <div className='cart'>
            <Link to={'/cart'} className='normalizeBlackLink'> 
                
                <span className='number'>{getQuantity() !== 0 ? getQuantity() : ''}</span>
            </Link>
        </div>
    )
}