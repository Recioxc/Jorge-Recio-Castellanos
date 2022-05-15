import React from 'react';
import { useState } from 'react';



const ItemCount = ({ initial, stock, onAdd }) => {
  //hook de estado
  const [qty, setQty] = useState(initial);
  const [showButton, setshowButton] = useState(false);

  

  const addItem = (num) => {
    setQty(qty + num);
  };

  return (
    <div>
      <div>
        <button
          onClick={() => addItem(-1)}
          disabled={qty === initial ? true : null}
        >
          -
        </button>
        <span>{qty}</span>
        <button
          onClick={() => addItem(+1)}
          disabled={qty === stock ? true : null}
        >
          +
        </button>
      </div>

      <button
        
        onClick={() => {onAdd(qty); setshowButton(true)}}
        disabled={stock === 0 ? true : null}
      >
        Finalizar compra
      </button>
    </div>
  );
};

export default ItemCount;