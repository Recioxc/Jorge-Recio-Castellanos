
import './App.css';
import NavBar from './components/NavBar';
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import { ItemListContainer } from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import NotFound404 from './components/NotFound';
import Cart from '../src/components/Cart';
import { CartContextProvider, cartProvider } from './Context/CartContext';

function App() {
  return (
    
     
    <CartContextProvider>
    <Router>
      
            <NavBar/>
            <Routes>
              <Route exact path='/' element={<ItemListContainer/>}/>
              <Route exact path='/vinyls' element={<ItemListContainer/>}/>
              <Route exact path='/vinyls/:paramId' element={<ItemDetailContainer/>}/>
              <Route path='/genere/:genereId' element={<ItemListContainer/>}/>
              <Route path='/cart' element={<Cart/>}/>
              <Route path='*' element={<NotFound404/>}/>
            </Routes>
            
    </Router>
    </CartContextProvider>
    
  );
 
}

export default App;
