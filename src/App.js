
import './App.css';
import NavBar from './components/NavBar';
import CartWidget from './components/CartWidget';
import ItemListContainer from './components/ItemListContainer';
import VinylContainer from './components/ItemList';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import VinylDetail from '../src/components/ItemDetail';
function App() {
  return (
    <>  
    
    <BrowserRouter>
          <NavBar></NavBar>
          <Routes>
            <Route path='/' element={<ItemListContainer/>}/>
            <Route path='/vinyls' element={<ItemListContainer/>}/>
            <Route path='/vinyls/:VinylId' element={<VinylDetail/>}/>
          </Routes>
        </BrowserRouter>
    </>
  );
 
}

export default App;
