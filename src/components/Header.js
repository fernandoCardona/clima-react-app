import React from 'react'
import PropTypes from 'prop-types';

//1.2 -Creamos el componente header y le pasamos el argumento titulo que vienen por props
const Header = ({titulo}) => {
    return ( 
        <nav>
            <div className="nav-wrapper light-blue darken-2">
                <a href="#!" className="brand-logo">{titulo}</a> 
            </div>  
        </nav>
        
     );
}


Header.propTypes = {
    titulo: PropTypes.string.isRequired
}
export default Header; 