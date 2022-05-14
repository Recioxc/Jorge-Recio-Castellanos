
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import ItemDetailContainer from '../src/components/ItemDetailContainer';
import NotFound404 from './components/NotFound';
function App() {
  return (
    <>  
   
    <Router>
            <NavBar/>
            <Routes>
              <Route exact path='/' element={<ItemListContainer/>}/>
              <Route exact path='/vinyls' element={<ItemListContainer/>}/>
              <Route exact path='/vinyls/:IdVinyl' element={<ItemDetailContainer/>}/>
              <Route path='*' element={<NotFound404/>}/>
            </Routes>
    </Router>
     
    </>
  );
 
}

export default App;
