import React from 'react';
import './style.css';
import Formulario from './Formulario';
import Turno from './Turno';
import styled from 'styled-components';

export default function App() {
  const agregarTurno = () => {};
  return (
    <StyledMensaje>
      <div className={'fondo'}>
      <div className={'sacarTurno'}>
        <h1 className={'titulo1'}>Administrador de pacientes</h1>
        <h2 className={'titulo2'}>Sacar turno</h2>
        <Formulario onTurnoAgregado={agregarTurno} />
        </div>
        <div className={'administraTusTurnos'}>
          <h2 className={'titulo3'}>Administra tus turnos</h2>
          <Turno />
        </div>
      </div>
    </StyledMensaje>
  );
}

const StyledMensaje = styled.div`

  .fondo {
    background-color: #e24a94;
    padding: 5px;
  }
  .titulo1 {
    text-align: center;
  }
  .titulo2 {
    margin-left: 200px;
  }
  .administraTusTurnos {
    display: inline;
    float: right;
    margin-right: 200px;
  }
`;
