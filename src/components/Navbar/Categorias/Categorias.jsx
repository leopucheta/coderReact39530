import React from 'react';
import { Link } from 'react-router-dom';

const Categorias = () => {
    return (
        <li className="nav-item dropdown">
        <span className="nav-link dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">Categorias</span>
        <ul className="dropdown-menu">
          <li> <Link className='dropdown-item' to ={"/category/sillasgamer"} >Sillas Gamer</Link> </li>
          <li> <Link className='dropdown-item' to ={"/category/tecladosymouse"} >Teclado y Mouse</Link> </li>
          <li> <Link className='dropdown-item' to ={"/category/accesorios"} >Accesorios</Link> </li>
        </ul>
      </li>
      
    );
}

export default Categorias;
