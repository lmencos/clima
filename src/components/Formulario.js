import React, { useState } from 'react';
import Error from './Error';

const Formulario = ({ busqueda, guardarBusqueda, guardarConsultar }) => {

const [ error, guardarError ] = useState(false);

// extraer ciudad, pais
const { ciudad, pais } = busqueda;

//función que coloca busqueda en el state
const handleChange = (e) => {
  //actualizar state
  guardarBusqueda({
    ...busqueda,
    [e.target.name] : e.target.value
  });
}

//cuando el usuario da submit al form
const handleSubmit = (e) => {
  e.preventDefault();

  //Validar
  if(ciudad.trim() === '' || pais.trim() === '') {
    guardarError(true);
    return;
  }
  guardarError(false);

  //Pasarlo al componente principal
  guardarConsultar(true);

};

  return ( 
    <form 
      onSubmit={handleSubmit}
    >
      { error? <Error mensaje="Ambos campos son obligatorios"/> : null }

      <div className="input-field col s12" >
        <input 
          type="text"
          name="ciudad"
          id="ciudad" 
          value={ciudad}
          onChange={handleChange}
          />
          <label htmlFor="ciudad">Ciudad:</label>
      </div>
      <div className="input-field col s12" >
        <select 
          name="pais" 
          id="pais"
          value={pais}
          onChange={handleChange}
        > 
          <option value="">--Seleccione un país--</option>
          <option value="MX">México</option>
          <option value="US">Estados Unidos</option>
          <option value="AR">Argentina</option>
          <option value="CO">Colombia</option>
          <option value="CR">Costa Rica</option>
          <option value="ES">España</option>
          <option value="PE">Perú</option>
        </select>
        <label htmlFor="pais">País:</label>
      </div>

      <div className="input-field col s12" >
        <button 
          type="submit"
          value="Buscar clima"
          className="waves-effectwaves-light btn-large btn-block yellow accent-4"

        >Buscar clima</button>

      </div>

    </form>
   );
}
 
export default Formulario;