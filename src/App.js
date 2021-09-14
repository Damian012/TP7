import React, { useState } from 'react';
import './style.css';
import Formulario from './Formulario';
import Turno from './Turno';
import styled from 'styled-components';


export default function App() {
  const [arrTurnos, setArrTurnos] = useState([]);

  const agregarTurno = (nombreMascota, nombreDueno, fecha, hora, sintomas) => {
    const datosTurno = {nombreMascota, nombreDueno, fecha, hora, sintomas};
    const nuevoArray = arrTurnos;
    nuevoArray.push(datosTurno);
    setArrTurnos(nuevoArray);
    console.log('Array de turnos:', arrTurnos);
  };
  return (
    <StyledTurno>
      <div className={'fondo'}>
      <div className={'sacarTurno'}>
        <h1 className={'titulo1'}>Administrador de pacientes</h1>
        <h2 className={'titulo2'}>Sacar turno</h2>
        <Formulario onTurnoAgregado={agregarTurno} />
        </div>
        <div className={'administraTusTurnos'}>
          <h2 className={'titulo3'}>Administra tus turnos</h2>
          {arrTurnos.length > 0 && arrTurnos.map((turno) => {
            return <Turno datos={turno}/>
          })}
        </div>
      </div>
    </StyledTurno>
  );
}

const StyledTurno = styled.div`

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
