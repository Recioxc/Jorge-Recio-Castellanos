import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { db } from "./Firebase";
import { doc, getDoc } from "firebase/firestore";
import {ItemDetail} from "./ItemDetail"
 
export const ItemDetailContainer = () => {

    const [Loader, setLoading] = useState(false)
    const [Vinyl, setItem] = useState(null)

    const { genereId } = useParams()

    useEffect(() => {
        setLoading(true)
        const docRef = doc(db, "items", genereId)
        getDoc(docRef)
            .then(doc => {
                setItem({ id: doc.id, ...doc.data() })
            })
            .finally(() => {
                setLoading(false)
            })
    }, [genereId])

    return (

        <>
            {
                Loader
                    ? <Loader />
                    : <ItemDetail {...Vinyl} />
            }
        </>

    )

}