import React, { Fragment, useState, useEffect } from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';
import Clima from './components/Clima';
import Error from './components/Error';

function App() {

  //state del formulario
  const [ busqueda, guardarBusqueda ] = useState({
    ciudad: '',
    pais: ''
  });

  const [ consultar, guardarConsultar ] = useState(false);
  const [ resultado, guardarResultado ] = useState({});
  const [  error, guardarError ] = useState(false);

  //Extraer ciudad y país de busqueda
  const { ciudad, pais } = busqueda;

  useEffect(() => {
    const consultarAPI = async () => {

      if(consultar) {
        //Seagregó "s" a HTTP para poder consultar la API como HTTPS
        const appId = '3c969ae752b249b663db018404444a46';
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${appId}`;
  
        const respuesta = await fetch(url);
        const resultado = await respuesta.json();

        guardarResultado(resultado);
        guardarConsultar(false);

        //Validar se hay datos de la ciudad capturada
        if(resultado.cod === "404") {
          guardarError(true);
        }else {
          guardarError(false)
        }
      };

    };
    consultarAPI();

    console.log('Ciudad: ', ciudad);
    console.log('País: ', pais );
    //eslint-disable-next-line
  }, [consultar]);

    //Mostrando mensaje de error cuando no hay datos
    let componente;
    if(error){
      componente = <Error mensaje="No hay información" />
    }else{
      componente = <Clima 
      resultado = {resultado}
      />

  }

  return (
    <Fragment>
      <Header 
        titulo='Clima Luchísimo'
      />
      <div className="contenedor-form">
        <div className="container" >
          <div className="row" >
            <div className="col m6 s12">
              <Formulario 
                busqueda={busqueda}
                guardarBusqueda={guardarBusqueda}
                guardarConsultar={guardarConsultar}
              />
            </div>
            <div className="col m6 s12">
              {componente}
            </div>

          </div>
        </div>

      </div>
    </Fragment>
  );
}

export default App;
