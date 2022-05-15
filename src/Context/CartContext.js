import {createContext, useState} from "react";

export const CartContext = createContext([]);

export const CartProivider = ({children}) => {
   
    const [items,setItems] = useState([])

    const isinCart =(id)=>{
       
        const find = items.find(item=>item.id==id);
        return find;
    }
    
    const addItem = (item,cant) => {
        
        isinCart(item.id)
        ?
        setItems()
        :
        setItems([...items,{id:item.id,name:item.title,price:item.price,cant:cant}])

    }
    return (
         <CartContext.Provider value={{items,addItem}}>
             {children}
         </CartContext.Provider>
    )
    
}