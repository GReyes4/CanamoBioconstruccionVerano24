import React from 'react';
import styled from 'styled-components';
import ruben from '../images/ruben.jpg';
import claudia from '../images/claudia.jpg';
import arq from '../images/arq.png';

const PeopleContainer = styled.section`
  padding: 40px 20px;
  background-color: #738063;
  text-align: center;
  font-family: 'Montserrat', sans-serif;
`;

const Title = styled.h2`
  font-size: 2em;
  margin-bottom: 20px;
  font-family: 'Montserrat', sans-serif;
  color: #fff;
`;

const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 60px;
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 150px;
`;

const Image = styled.img`
  width: 125px;
  height: 125px;
  border-radius: 50%;
  object-fit: cover;
`;

const Name = styled.p`
  margin-top: 10px;
  font-size: 1.2em;
  font-weight: 400;
  font-family: 'Montserrat', sans-serif;
  color: #fff;
`;

const People = () => {
  return (
    <PeopleContainer>
      <Title>Profesores Involucrados en el Programa</Title>
      <CardContainer>
        <Card>
          <Image src={ruben} alt="Profesor 1" />
          <Name>Dr. Ruben Ahumada-Lazo</Name>
        </Card>
        <Card>
          <Image src={claudia}  alt="Profesor 2" />
          <Name>M.C Claudia Lorena Compeán González</Name>
        </Card>
        <Card>
          <Image src={arq}  alt="Profesor 3" />
          <Name>Arq. Bogdan Mircea Ilie</Name>
        </Card>
      </CardContainer>
    </PeopleContainer>
  );
}

export default People;
