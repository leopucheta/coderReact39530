
import './App.css';
import Navbar from './Navbar/Navbar';
import ItemListContainer from './ItemListContainer/ItemListContainer';
import ItemDetailContainer  from './ItemDetailContainer/ItemDetailContainer';



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
      <Navbar/>

      <ItemListContainer/>

      <ItemDetailContainer/>

    
  </>
    
  );
}

export default App;
