import React from 'react';
import { Link } from 'react-router-dom';

//Context
import { useDarkModeContext } from '../../context/DarkModeContext';



export const Item = ({item}) => {
  const {darkMode} = useDarkModeContext()
    return (
        //Ternario V= 1ra F= 2da
      <div className= {`card mb-3 cardProducto ${ darkMode ? 'border-light' : 'text-white bg-primary border-secondary'}`}  > 
      <img src={`${item.img}`} className="card-img-top" alt={"producto"}/>
      <div className= {` cardBody  ${ darkMode ? 'card-Body' : 'cardBodyDark'    }  `}  >
        <h5 className="card-title"> {item.nombre} {item.modelo} </h5>
        <p className="card-text"> {item.marca} </p>
        <p className="card-text"> $ { new Intl.NumberFormat ('de-DE').format(item.precio)} </p>        
        <button className= {`btn ${darkMode ?  'btn-dark' : 'btn-primary'   }`}> 
        <Link className='nav-link' to={`/item/${item.id}`} >Ver Producto</Link>  </button>
        
      </div>
    </div>
  );
}

export default Item;

