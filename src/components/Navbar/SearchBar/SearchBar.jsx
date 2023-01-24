import React from 'react';

const SearchBar = () => {
    return (
        <form role="search">
        <input className="form-control" type="search" placeholder="Buscar productos" aria-label="Search" />
        </form>
    );
}

export default SearchBar;
