import React from 'react';
import { useState, useEffect } from 'react';
import ItemList from '../ItemList/ItemList';

const ItemListContainer = ({itemListContainer}) => {

    const [productos, setProductos] = useState ([])
    useEffect(() => {
        fetch ('./json/productos.json')
        .then (response => response.json())
        .then (products => {
            const productsList = ItemList ({products}) //Array de productos
            setProductos (productsList)
        }  )
    },[])

    return (  
        <div>
             {productos}
        </div>
            
    );
}

export default ItemListContainer;
