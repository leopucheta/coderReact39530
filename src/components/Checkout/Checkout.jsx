import { useCarritoContext } from "../../context/CarritoContext"
import { Link } from "react-router-dom"
import  React, { useState }  from "react"
import { useNavigate } from "react-router-dom"
import {toast} from 'react-toastify'
import { createOrdenCompra, getOrdenCompra, getProducto, updateProducto } from "../../firebase/firebase"
import FormCheckout from "../FormCheckout/FormCheckout"



export const Checkout = () => {

    const {carrito, emptyCart, totalPrice} = useCarritoContext()
    const datosFormulario = React.useRef()
    const [ confirmation, setConfirmation ] = useState(false)
    let navigate = useNavigate()

    const consultarFormulario = (e) => {
        e.preventDefault()
        if(confirmation){
            const datForm = new FormData(datosFormulario.current)
        const cliente = Object.fromEntries(datForm)
        
        const aux = [...carrito]

        aux.forEach(prodCarrito => {
            getProducto(prodCarrito.id).then(prodBDD => {
                prodBDD.stock -= prodCarrito.cant //Descuento del stock
                updateProducto(prodCarrito.id, prodBDD)
            })
        })

        createOrdenCompra(cliente, aux, totalPrice(), new Date().toISOString()).then(ordenCompra =>{
            getOrdenCompra(ordenCompra.id)
            toast.success(`¡Muchas gracias por tu compra!, su orden de compra con el ID: ${ordenCompra.id
            } por un total de $ ${new Intl.NumberFormat('de-DE').format(totalPrice())} fue realizada con exito`)
            emptyCart()
            e.target.reset()
            navigate("/")
        })

        }
        
    }

      

   return (
    <>
        {carrito.length === 0 
         ? 
          <>
                <h2>No hay productos en el carrito</h2>
                <Link className="nav-link" to={'/'}><button className="btn btn-dark">Continuar comprando</button></Link> 
          </>
          :
           <FormCheckout consultarFormulario ={consultarFormulario} confirmation={confirmation} setConfirmation={setConfirmation}>
            
           </FormCheckout>
        }
    
    </>
          
   )
}
export default Checkout;
