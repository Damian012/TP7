import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Formulario = props => {
  return (
    <form>
      <label>Nombre Mascota</label>
      <br />
      <input
        type="text"
        name="mascota"
        className="u-full-width"
        placeholder="Nombre Mascota"
        value=""
      />
      <br />
      <label>Nombre Dueño</label>
      <br />
      <input
        type="text"
        name="propietario"
        className="u-full-width"
        placeholder="Nombre dueño de la mascota"
        value=""
      />
      <br />
      <label>Fecha</label>
      <br />
      <input type="date" name="fecha" class="u-full-width" value="" />
      <br />
      <label>Hora</label>
      <br />
      <input type="time" name="hora" class="u-full-width" value="" />
      <br />
      <label>Sintomas</label>
      <br />
      <textarea name="sintomas" className="u-full-width" />
      <br />
      <button type="submit" class="u-full-width button-primary">
        Agregar Turno
      </button>
    </form>
  );
};

export default Formulario;
