import React from 'react';
import './style.css';
import Formulario from './Formulario';
import Turno from './Turno';
import styled from 'styled-components';

export default function App() {
  return (
    <StyledMensaje>
      <div className={'fondo'}>
        <h1 className={'titulo1'}>Administrador de pacientes</h1>
        <h3 className={'titulo2'}>Sacar turno</h3>
        <Formulario />
        <h3 className={'titulo3'}>Administra tus turnos</h3>
        <Turno />
      </div>
    </StyledMensaje>
  );
}

const StyledMensaje = styled.div`
  .fondo {
    background-color: #e24a94;
    padding: 5px;
  }
`;
