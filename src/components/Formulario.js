import React, { useState } from 'react';

const Formulario = () => {

  //state del formulario
const [ busqueda, guardarBusqueda ] = useState({
  ciudad: '',
  pais: ''
});

// extraer ciudad, pais
const { ciudad, pais } = busqueda;

//función que coloca busqueda en el state
const handleChange = (e) => {
  //actualizar state
  guardarBusqueda({
    ...busqueda,
    [e.target.name] : [e.target.value]
  });
}

  return ( 
    <form action="">
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
    </form>
   );
}
 
export default Formulario;