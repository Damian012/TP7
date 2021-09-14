import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Formulario = props => {
  const [nombreMascota, setNombreMascota] = useState('');
  const [nombreDueno, setNombreDueno] = useState('');
  const [fecha, setFecha] = useState('');
  const [hora, setHora] = useState('');
  const [sintomas, setSintomas] = useState('');

  const obtenerDatos = () => {
    props.onTurnoAgregado(nombreMascota, nombreDueno, fecha, hora, sintomas);

    console.log('Nombre mascota:', nombreMascota);
    console.log('Nombre Dueño:', nombreDueno);
    console.log('Fecha:', fecha);
    console.log('Hora:', hora);
    console.log('Sintomas:', sintomas);
  };

  return (
    <form>
      <label>Nombre Mascota</label>
      <br />
      <input
        type="text"
        name="mascota"
        className="u-full-width"
        placeholder="Nombre Mascota"
        onChange={e => setNombreMascota(e.target.value)}
      />
      <br />
      <label>Nombre Dueño</label>
      <br />
      <input
        type="text"
        name="propietario"
        className="u-full-width"
        placeholder="Nombre dueño de la mascota"
        onChange={e => setNombreDueno(e.target.value)}
      />
      <br />
      <label>Fecha</label>
      <br />
      <input
        type="date"
        name="fecha"
        className="u-full-width"
        onChange={e => setFecha(e.target.value)}
      />
      <br />
      <label>Hora</label>
      <br />
      <input
        type="time"
        name="hora"
        className="u-full-width"
        onChange={e => setHora(e.target.value)}
      />
      <br />
      <label>Sintomas</label>
      <br />
      <textarea
        name="sintomas"
        className="u-full-width"
        onChange={e => setSintomas(e.target.value)}
      />
      <br />
      <button
        type="button"
        className="u-full-width button-primary"
        onClick={obtenerDatos}
      >
        Agregar Turno
      </button>
    </form>
  );
};

export default Formulario;
