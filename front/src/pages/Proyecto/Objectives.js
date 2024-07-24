import React from 'react';
import styled from 'styled-components';
import soste from '../images/soste.png';
import educa from '../images/educa.png';
import inclusion from '../images/inclusion.png';

const ObjectivesContainer = styled.section`
  padding: 40px 20px;
  background-color: #eae6e3;
  text-align: center;
  font-family: 'Montserrat', sans-serif;
`;

const Title = styled.h2`
  font-size: 2em;
  margin-bottom: 20px;
  font-family: 'Montserrat', sans-serif;
  color: #3E4D3D;
  

`;

const ObjectivesGrid = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 5px;
`;

const ObjectiveCard = styled.div`
  background-color: #3E4D3D;
  padding: 20px;
  border-radius: 50px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  width: 300px;
  text-align: left;
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  border-radius: 8px;
`;

const ObjectiveTitle = styled.h3`
  font-size: 1.5em;
  margin-top: 10px;
  font-family: 'Montserrat', sans-serif;
  text-align: center;
    color: #EAE6E3;
`;

const ObjectiveText = styled.p`
  font-size: 1em;
  margin-top: 10px;
  font-family: 'Montserrat', sans-serif;
  text-align: left;
    color: #EAE6E3;
`;

const ObjectiveText2 = styled.p`
    font-size: 12px;
    margin-top: 0px;
    font-family: 'Montserrat', sans-serif;
    text-align: left;
    color: #EAE6E3;
`;

const Objectives = () => {
  return (
    <ObjectivesContainer>
      <Title>Objetivos del Proyecto</Title>
      <ObjectivesGrid>
        <ObjectiveCard>
          
          <ObjectiveTitle>Sostenibilidad</ObjectiveTitle>
          <ObjectiveText>Implementar técnicas de construcción con cáñamo industrial, que es un material ecológico, eficiente y con baja huella de carbono.</ObjectiveText>
          <Image src={soste} alt="Sostenibilidad" /> 
          <ObjectiveText2>Santa Teresa Del Nayar</ObjectiveText2>
        </ObjectiveCard>
        <ObjectiveCard>
         
          <ObjectiveTitle>Educación y Capacitación</ObjectiveTitle>
          <ObjectiveText>Proveer conocimientos y herramientas a los miembros de la comunidad para que puedan mantener y replicar las técnicas de construcción sostenible.</ObjectiveText>
          <Image src={educa} alt="Educación y Capacitación" /> 
          <ObjectiveText2>Taller de introducción a la tecnología</ObjectiveText2>
        </ObjectiveCard>
        <ObjectiveCard>
          
          <ObjectiveTitle>Inclusión Comunitaria</ObjectiveTitle>
          <ObjectiveText>Trabajar de la mano con la comunidad naayeri, respetando sus tradiciones y necesidades, asegurando que el proyecto beneficie directamente a sus habitantes.</ObjectiveText>
          <Image src={inclusion} alt="Inclusión Comunitaria" /> 
          <ObjectiveText2>Semana Santa Cora</ObjectiveText2>
        </ObjectiveCard>
      </ObjectivesGrid>
    </ObjectivesContainer>
  );
}

export default Objectives;
