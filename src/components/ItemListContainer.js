import React, {useState, useEffect} from 'react';
import {ItemList} from "./ItemList";
import { useParams } from 'react-router';
import { Loader } from './Loader';
import {collection, getDocs, query, where} from 'firebase/firestore/lite';
import { db } from './Firebase';


export const ItemListContainer = () => {

    const [loading, setLoading] = useState(false)
    const [vinyls, setVinyls] = useState([])

    const {genereId} = useParams()

    useEffect(() => {
        setLoading(true)
        const Vinylr = collection(db, 'items')
        const q = genereId ? query(Vinylr, where('Genere', '==', genereId )) : Vinylr

        getDocs(q)
            .then( (collection) => {
                
                const items = collection.docs.map((doc)=> ({
                    id: doc.id,
                    ...doc.data()
                }))
                console.log(items)
                setVinyls(items)
            })
            .catch ((error)=> {
                console.log(error)
            })
            .finally (()=> {
                setLoading(false)
            })
    }, [genereId])

    return (
        <div>
            {
                loading 
                    ? 
                     
                        <Loader/>
                    : 
                        <>
                            <ItemList items={vinyls}/>
                            <hr className='divider'/>
                            
                        </>
            }

        </div>
    )
}