import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Turno = props => {
  return (
    <StyledTurno>
      <div className={'caja'}>
        <p>Mascota: {props.datos.nombreMascota}</p>
        <p>Dueño: {props.datos.nombreDueno}</p>
        <p>Fecha: {props.datos.fecha}</p>
        <p>Hora: {props.datos.hora}</p>
        <p>Sintomas: {props.datos.sintomas}</p>
        <button>Eliminar</button>
      </div>
    </StyledTurno>
  );
};

const StyledTurno = styled.div`
  .caja {
    background-color: #ffffff;
    border: 2px solid #000;
    width: 300px;
  }
`;

export default Turno;
