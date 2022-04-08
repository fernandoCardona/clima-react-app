import React, { useState } from 'react'
import Error from './Error';
import PropTypes from 'prop-types';

//2.2-Creamos el componente Formulario
const Formulario = ({busqueda, guardarBusqueda, guardarConsultar}) => {
     //2.8-Creamos el state para el error en el formulario del
    const [error, guardarError] = useState(false);

    //2.5-Aplicamos distructurin para extraer ciudad y pais de la busqueda del
    const { ciudad, pais } = busqueda;

    //2.6-Funcion handleChange que coloca los elementos del input y el select en el state del element con el evento onChange
    const handleChange = e => {
        guardarBusqueda({
            ...busqueda,
            [e.target.name]: e.target.value
        })
    }

    //2.7-Funcion handleSubmit que maneja el submit del formulario atraves del evento onSubmit
    const handleSubmit = e => {
        e.preventDefault();
         
        //validar
        if (ciudad.trim() === '' || pais.trim() === '') {
            guardarError(true);
            return;
        }
        guardarError(false);
        guardarConsultar(true);
    }


    return ( 
        
        <form onSubmit={handleSubmit}>
        {
        //2.3-Creamos el form con sus inputs
        }
        {
        //2.8.1-Creamos unn ternario por si tenemos un error en el formulario generamos un mensaje de error
        error ? <Error mensaje="Ambos campos son obligatorios" /> : null 
        }
            <div className='input-field col s12'>
                <input type='text' name='ciudad' id='ciudad' value={ciudad} onChange={handleChange}/>
                <label htmlFor='ciudad'>Ciudad: </label>
            </div>
            <div className='input-field col s12'>
                <select name='pais' id='pais' value={pais} onChange={handleChange} >
                    <option value=''>--Elige un país--</option>
                    <option value="US">Estados Unidos</option>
                    <option value="MX">México</option>
                    <option value="AR">Argentina</option>
                    <option value="CO">Colombia</option>
                    <option value="CR">Costa Rica</option>
                    <option value="ES">España</option>
                    <option value="PE">Perú</option>
                </select>
                <label  htmlFor='pais'>País: </label>
            </div>
            <div className='input-field col s12'>
                <input type='submit' className='waves-effect waves-light btn-large btn-block yellow accent-4 col s12' value='Buscar Clima'/>
            </div>
        </form>
     );
}


Formulario.propTypes = {
    busqueda : PropTypes.object.isRequired,
    guardarBusqueda : PropTypes.func.isRequired,
    guardarConsultar : PropTypes.func.isRequired,
}
export default Formulario;