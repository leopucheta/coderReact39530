
import './App.css';
import Navbar from './Navbar/Navbar';
import ItemListContainer from './ItemListContainer/ItemListContainer';
import ItemDetailContainer  from './ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';



/* --Anotaciones--

class => className
<input> => <input/>
`${} => {}`
style = "nombreClase" => style= {{"nombrePropiedad" : "valor"}}

La mayor parte de las propiedades, va con camelCase

React retorna solamente un elemento


*/


function App() {
  return (
    <>

    <BrowserRouter>
      <Navbar/> 
      <Routes>
        <Route path='/' element={<ItemListContainer/>}/> 
        <Route path='/item/:id' element={<ItemDetailContainer/>}/>
        <Route path='/category/:idCategoria' element={<ItemListContainer/>}/>
      </Routes> 
    </BrowserRouter>
      
    </>
    
  );
}

export default App;
