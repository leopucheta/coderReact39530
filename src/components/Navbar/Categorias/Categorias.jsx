import React from 'react';
import { Link } from 'react-router-dom';

const Categorias = () => {
    return (
        <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown" aria-expanded="false">Categorias</a>
        <ul className="dropdown-menu">
          <li> <Link className='dropdown-item' to ={"/category/1"} >Sillas Gamer</Link> </li>
          <li> <Link className='dropdown-item' to ={"/category/2"} >Teclado y Mouse</Link> </li>
          <li> <Link className='dropdown-item' to ={"/category/3"} >Accesorios</Link> </li>
        </ul>
      </li>
      
    );
}

export default Categorias;
