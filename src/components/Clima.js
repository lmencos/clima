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
        <h3>Clima de {name}: </h3>
        <p className="temperatura">
          { parseFloat( main.temp - kelvin, 10 ).toFixed(2) } <span> &#x2103; </span>
        </p>
        <p>Temp. máx:__
          { parseFloat( main.temp_max - kelvin, 10 ).toFixed(2) } <span> &#x2103; </span>
        </p>
        <p>Temp. Mín:__
          { parseFloat( main.temp_min - kelvin, 10 ).toFixed(2) } <span> &#x2103; </span>
        </p>
        <p>Clima:__
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