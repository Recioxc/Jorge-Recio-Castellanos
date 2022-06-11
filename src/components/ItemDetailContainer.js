import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import ItemDetail from "./ItemDetail"
import { Loader } from "./Loader";
import { Link } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore/lite";
import { db } from './Firebase';

const ItemDetailContainer = () => {

    const [ product, setProduct] = useState()
    const [ loading, setLoading ]  = useState (true)
    const { paramId } = useParams();
    
    useEffect( () => {
        
        
        setLoading(true)
        getDoc(doc(db, 'items', paramId )).then ((querySnaptshot) => {
            const product = { id: querySnaptshot.id, ...querySnaptshot.data() }
            setProduct(product)
        }).catch ((error) => {
            console.log(error)
        }).finally( () =>{
            setLoading(false)
        })
        
        return (() =>{
            setProduct()
        })

    }, [paramId])


    return (
        <div>
            { loading ? 
                <Loader />
                : <ItemDetail product={product} />}
        </div>
    )
}

export default ItemDetailContainer