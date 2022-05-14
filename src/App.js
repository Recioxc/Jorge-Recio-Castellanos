
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemDetailContainer from '../src/components/ItemDetailContainer';
import nOtf from './components/NotFound';
function App() {
  return (
    <>  
    <switch>
    <BrowserRouter>
          <NavBar></NavBar>
          <Routes>
            <Route path='/' element={<ItemListContainer/>}/>
            <Route path='/vinyls' element={<ItemListContainer/>}/>
            <Route path='/vinyls/:IdVinyl' element={<ItemDetailContainer/>}/>
            <Route path='*' element={<nOtf/>}/>
          </Routes>
        </BrowserRouter>
     </switch>
    </>
  );
 
}

export default App;
