import React from 'react';
import CartWidget from '../CartWidget/CartWidget';
import Categorias from './Categorias/Categorias';
import Secciones from './Secciones/Secciones';
import SearchBar from './SearchBar/SearchBar';
import LogoNavbar from '../LogoNavbar/LogoNavbar';

const Navbar = () => {
    return (
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark" aria-label="Eighth navbar example">
    <div className="container">

      <LogoNavbar/>   

      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample07" aria-controls="navbarsExample07" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
      </button>

      <div className="collapse navbar-collapse" id="navbarsExample07">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <Secciones/> 
          <Categorias/>      
        </ul>
        <CartWidget cantCarrito={5}/>
        <SearchBar/>        
      </div>
      
      
    
    </div>
    
  </nav>
    );
}

export default Navbar;
