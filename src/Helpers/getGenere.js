
import {query, where, collection, getDocs} from 'firebase/firestore/lite'
import firestoreDB from './Index'

export async function getGenere(categoryId){
    const miColeccion = collection(firestoreDB, 'productos');

    const queryCategory = query(miColeccion, where("category", "==", categoryId));

    const productosSnapshot = await getDocs(queryCategory);

    return productosSnapshot.docs.map(doc => {
        return {
            ...doc.data(),
            id: doc.id
        }
    });
}