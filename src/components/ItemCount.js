import React, { useState } from 'react';

const ItemCount = ({ product, onAdd  }) => {

  const [quantity, setQuantity] = useState(0)
  const [stockAct, setStockAct ] = useState(product.Stock)
  
  const addProduct = () =>{
      if(quantity < product.Stock){
          setQuantity( quantity + 1 )
          setStockAct( product.Stock - (quantity +1 ) )
      }
  }

  const remProduct = () =>{
      if(quantity > 0){
          setQuantity( quantity - 1 )
          setStockAct( stockAct + 1  )
      }
  }    
  
  return (
      <div className="card mt-3 mb-3">
          <div className="card-body text-center">
              <div className='text-center itemCount__container'>
                  <button type="button" className="btn btn-light itemCount__button" onClick={ () => remProduct() }>-</button>
                  <p align="center" className='text-center item__number'>{quantity}</p>
                  <button type="button" className="btn btn-light itemCount__button" onClick={ () => addProduct()}>+</button>
              </div>
              <div>
                  <button type="button" className="btn btn-primary m-2" onClick={ () => onAdd (quantity)}> Agregar al Carrito</button>
                  <p className="text-center">Stock disponible de productos: {stockAct}</p>
              </div>
          </div>
      </div>
  )
}

export default ItemCount
