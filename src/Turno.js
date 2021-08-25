import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const turno = props => {
  return (
    <StyledMensaje>
    <div className={"caja"}>
      <p>Mascota: {}</p>
      <p>Dueño: {}</p>
      <p>Fecha: {}</p>
      <p>Hora: {}</p>
      <p>Sintomas: {}</p>
      <button>Eliminar</button>
    </div>
    </StyledMensaje>
  );
};

const StyledMensaje = styled.div`
  .caja {
    background-color: #FFFFFF;
    border: 2px solid #000;
    width: 300px;
  }
`;

export default turno;