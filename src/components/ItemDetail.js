import { useContext, useState } from "react"
import { Link } from "react-router-dom"
import { cartContext } from "../Context/CartContext"
import ItemCount from "./ItemCount"

const ItemDetail = ({ item }) => {
    const [showButton, setShowButton] = useState(0);
    const { addItem } = cartContext();
  
    const onAdd = (quantityToAdd) => {
      setShowButton(quantityToAdd);
      addItem(item, quantityToAdd);
    };
  
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-2 col-xs-12 padding"></div>
          <div className="col-lg-4 col-xs-12 image card">
            <img
              className="img-fluid"
              src={item.img}
              alt={item.Name}
            />
          </div>
  
          <div className="col-lg-4 col-xs-12 properties">
            <div className="properties-title">{item.title}</div>
            <div className="properties-title">${item.price}</div>
            <div className="properties-description">{item.description}</div>
            <div className="properties-title">Stock disponible: {item.stock}</div>
            {showButton === 0 ? (
              <ItemCount
                initial={1}
                stock={item.stock}
                onAdd={onAdd}
                item={item}
              />
            ) : (
              <>
                <Link to={"/cart"}>
                  <button label="Terminar compra" type="primary" />
                </Link>
                <Link to={"/"}>
                  <button label="Ver más productos" type="secondary" />
                </Link>
              </>
            )}
          </div>
          <div className="col-lg-2 col-xs-12 padding "></div>
        </div>
      </div>
    );
  };
  
  export default ItemDetail;