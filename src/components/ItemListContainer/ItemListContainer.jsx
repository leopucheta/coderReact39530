import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from '../ItemList/ItemList';

const ItemListContainer = ({itemListContainer}) => {

    const [productos, setProductos] = useState ([])
    const {idCategoria}= useParams()


    useEffect(() => {
        if(idCategoria){

            fetch ('../json/productos.json')
            .then (response => response.json())
            .then (items => {
                const products = items.filter(prod => prod.idCategoria === parseInt(idCategoria))
                const productsList = ItemList ({products}) //Array de productos
                setProductos (productsList)
            }  )
        }else{
            

        fetch ('./json/productos.json')
        .then (response => response.json())
        .then (products => {
            const productsList = ItemList ({products}) //Array de productos
            setProductos (productsList)
        }  )

        }

    },[idCategoria])

    return (  
        <div className='row cardProductos'>
             {productos}
        </div>
            
    );
}

export default ItemListContainer;
