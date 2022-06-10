
import { collection, getDocs} from 'firebase/firestore/lite'
import firestoreDB from './Index'

export async function getVinyls(){
    const miColeccion = collection(firestoreDB, 'productos');

    const vinylSnapshot = await getDocs(miColeccion);

    return vinylSnapshot.docs.map(doc => {
        return {
            ...doc.data(),
            id: doc.id
        }
    });
}

