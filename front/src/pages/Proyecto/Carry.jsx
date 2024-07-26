import React from 'react';
import styled from 'styled-components';
import AmeecLogo from './images/ameec.png';
import TecLogo from './images/tec.png';

const CarryContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #D0CDCD;
  padding: 20px;
  font-family: 'Montserrat', sans-serif;
`;

const Image = styled.img`
  width: 170px; /* Ajusta el tamaño de las imágenes según sea necesario */
  height: auto;
  margin: 0 20px; /* Espaciado entre la imagen y el texto */
`;

const CarryText = styled.p`
  font-size: 1.2em;
  text-align: center;
`;

const Carry = () => {
  return (
    <CarryContainer>
      <Image src={AmeecLogo} alt="AMEEC Logo" />
      <CarryText>Descubre nuestro proyecto en alianza con el Tec de Monterrey sobre cáñamo industrial</CarryText>
      <Image src={TecLogo} alt="Tec de Monterrey Logo" />
    </CarryContainer>
  );
}

export default Carry;
