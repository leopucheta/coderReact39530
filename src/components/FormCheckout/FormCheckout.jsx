import React, { useState, useEffect } from 'react';

//Context
import { useDarkModeContext } from '../../context/DarkModeContext';

const FormCheckout = ({consultarFormulario, confirmation, setConfirmation}) => {

    const {darkMode} = useDarkModeContext()

    const [client,setClient] = useState(
        {
            nombre: '',
            email: '',
            repEmail: '',
            celular: '',
            direccion:''
        }
    );
    const handleInputChange = (e) => {
        setClient({
            ...client,
            [e.target.name] : e.target.value
        })
    }

    useEffect(() => {
        setConfirmation(document.getElementById('email').value===document.getElementById('repEmail').value)
    }, [handleInputChange])

    // <div className= {row g-0 ${darkMode ? '' : 'bodyItemDetailDark'}   `}  >

    return (
        <div className= {`container  style={{marginTop:"20px"}}  ${darkMode ? '' : 'bodyItemDetailDark'}              `}   >
        <form onSubmit={consultarFormulario} >
            <div className="mb-3">
            <label htmlFor="nombre" className="form-label">Nombre y apellido</label>
            <input type="text" required onChange={handleInputChange} className="form-control" name="nombre"/>
        </div>
            <div className="mb-3">
            <label htmlFor="email" className="form-label">Email</label>
            <input id='email' required type="email"  onChange={handleInputChange} className="form-control" name="email" />
        </div>
        <div className="mb-3">
            <label htmlFor="repEmail" className="form-label">Repetir Email</label>
            <input id='repEmail' required type="email"  onChange={handleInputChange} className="form-control" name="repEmail" />
        </div>

        {
                        !confirmation && <span id='incorrectEmail'> ⚠ Deben coincidir los emails ⚠ </span>
                    }

        <div className="mb-3">
            <label htmlFor="celular" className="form-label">Numero de telefono</label>
            <input type="tel" required onChange={handleInputChange} className="form-control" name="celular" />
        </div>
        <div className="mb-3">
            <label htmlFor="direccion" className="form-label">Direccion</label>
            <input type="text" required  onChange={handleInputChange} className="form-control" name="direccion" />
        </div>

        <button type="submit" className="btn btn-primary">Finalizar Compra</button>
        </form>
    </div>
    );
}

export default FormCheckout;