import React from 'react';
import PropTypes from 'prop-types';

const Clima = ({resultado}) => {

  const { name, main, weather  } = resultado;

  if(!name) return null;

  //Grados Kelvin
  const kelvin = 273.15

  return ( 
    <div className="card-panel white col s12">
      <div className="back-text">
        <h3 className="tituloClima">{name}</h3>
        <p className="temperatura">
          { parseFloat( main.temp - kelvin, 10 ).toFixed(2) } <span> &#x2103; </span>
        </p>
        <p className="temperatura2">Máx:
          { parseFloat( main.temp_max - kelvin, 10 ).toFixed(2) } <span> &#x2103; </span>
        </p>
        <p className="temperatura2">Mín:
          { parseFloat( main.temp_min - kelvin, 10 ).toFixed(2) } <span> &#x2103; </span>
        </p>
        <p className="temperatura3">
          { weather[0].description } 
        </p>
      </div>
    </div>
   );
}
 
Clima.propTypes = {
  resultado: PropTypes.object.isRequired
}
export default Clima;