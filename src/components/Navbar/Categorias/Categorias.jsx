import React from 'react';

const Categorias = () => {
    return (
        <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown" aria-expanded="false">Categorias</a>
        <ul className="dropdown-menu">
          <li><a className="dropdown-item" href="#">Sillas Gamer</a></li>
          <li><a className="dropdown-item" href="#">Teclado y Mouse</a></li>
          <li><a className="dropdown-item" href="#">Accesorios</a></li>
        </ul>
      </li>
      
    );
}

export default Categorias;
