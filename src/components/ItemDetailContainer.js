import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import ItemDetail from "./ItemDetail"
import { Loader } from "./Loader";
import { Link } from "react-router-dom";
import {collection, getDocs, query, where} from 'firebase/firestore/lite';
import { doc, getDoc } from "firebase/firestore";
import { db } from './Firebase';

export const ItemDetailContainer = () => {

  const [loading, setLoading] = useState(false)
  const [item, setItem] = useState(null)

  const { itemId } = useParams()

  useEffect(() => {
      setLoading(true)
      const docRef = doc(db, "items", itemId)
      getDoc(docRef)
          .then(doc => {
              setItem({ id: doc.id, ...doc.data() })
          })
          .finally(() => {
              setLoading(false)
          })
  }, [])

  return (

      <>
          {
              loading
                  ? <Loader />
                  : <ItemDetail {...item} />
          }
      </>

  )

}