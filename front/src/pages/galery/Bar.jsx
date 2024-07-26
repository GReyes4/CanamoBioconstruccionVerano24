import React from 'react';
import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';

// Aplicar la fuente Montserrat globalmente
const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600&display=swap');
  body {
    font-family: 'Montserrat', sans-serif;
  }
`;

const BarContainer = styled.div`
  background: #EAE6E3;
  display: flex;
  justify-content: center; /* Centra los items horizontalmente */
  align-items: center;
  padding: 20px 0;
  gap: 150px; /* Espacio entre los items */

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 20px; /* Reduce el espacio entre los items */
  }
`;

const BarItem = styled.div`
  font-size: 1.2em;
  text-align: center;
  padding-left: 90px;

  a {
    text-decoration: none;
    color: black;

    &:hover {
      text-decoration: underline;
    }
  }

  @media (max-width: 768px) {
    font-size: 1em;
    padding-left: 0;
  }
`;

const Bar = () => {
  return (
    <>
      <GlobalStyle />
      <BarContainer>
        <BarItem>
          <a href="#eventos">Eventos</a>
        </BarItem>
        <BarItem>
          <a href="#proyectos">Proyectos</a>
        </BarItem>
        <BarItem>
          <a href="#bioconstruccion">Actividades<br />de Bioconstrucción</a>
        </BarItem>
      </BarContainer>
    </>
  );
};

export default Bar;
