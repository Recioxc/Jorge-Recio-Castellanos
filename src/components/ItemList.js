import React from 'react'
import {Item} from './Item'


export const ItemList = ({items}) => {

    return (
        <div className="featured__container bd-grid">
            {items.map((products) => <Item key={products.id} {...products}/>)}            
        </div>
    )
}