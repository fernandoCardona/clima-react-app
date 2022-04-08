import React,{ Fragment, useState, useEffect } from 'react';
//1.0-Importamos el componente Header
import Header from './components/Header'
//2.0-Importamos el componente Formulario
import Formulario from './components/Formulario'
//4.0-Importamos el componente Clima
import Clima from './components/Clima'
//4.0-Importamos el componente Error
import Error from './components/Error';


function App() {
  // state del formulario
  //2.4-Creamos el state del componente
  const [busqueda, guardarBusqueda] = useState({  
        //busqueda: es el state, guardarBusqueda: es la  
      ciudad: '',
      pais: ''
  });
  //3.2-cramos un state para consultar 
  const [consultar, guardarConsultar] = useState(false);
  const [resultado, guardarResultado] = useState({});

  //2.8-Creamos el state para el error en el formulario del
  const [error, guardarError] = useState(false);

  //2.5-Aplicamos distructurin para extraer ciudad y pais de la busqueda del
    const { ciudad, pais } = busqueda;

//3.0-Importamos useEffect a react y  
  useEffect(() => {
      const consultarAPI= async () => {
        
        if(consultar) {
          const appId = '5548daba99edab4275199a80cc1f57a1';
          const url = `http://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${appId}`;
  
          const respuesta = await fetch(url);
          const resultado = await respuesta.json();
  
          guardarResultado(resultado);
          guardarConsultar(false);

          // Detecta si hubo resultados correctos en la consulta

          if(resultado.cod === "404") {
              guardarError(true);
          } else {
              guardarError(false);
          }
        }

      }
      consultarAPI();
  // eslint-disable-next-line
  },[consultar]);

  let componente;
  if(error) {
    componente = <Error mensaje="No hay resultados" />
  } else {
    componente = <Clima  resultado={resultado} />
  }


  return (
  
          <Fragment>
                {
                  //1.1-Creamos props para el titulo='Clima React app'
                }
                <Header titulo='Clima React app' />
                {
                  //2.1-Creamos el contenedor del formulario
                }
                <div className="contenedor-form">
                    <div className="container">
                        <div className="row">
                             <div className="col s12 m6">
                                  <Formulario 
                                    busqueda={busqueda}
                                    guardarBusqueda={guardarBusqueda}
                                    guardarConsultar={guardarConsultar}
                                  />
                              </div>
                              <div className="col s12 m6">
                                 {componente}
                              </div>
                        </div>
                    </div>
                </div>
          </Fragment>
         );
}

export default App;
