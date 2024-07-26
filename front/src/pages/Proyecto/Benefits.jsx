import React, { useEffect, useRef } from 'react';
import styled, { keyframes } from 'styled-components';

const BenefitsContainer = styled.section`
  padding: 40px 20px;
  background-color: #3E4D3D;
  text-align: center;
  opacity: 0;
  transition: opacity 1s ease-in-out;
  &.visible {
    opacity: 1;
  }
`;

const Title = styled.h2`
  font-size: 2em;
  margin-bottom: 20px;
  color: #fff;
  font-family: 'Montserrat', sans-serif;

  @media (max-width: 768px) {
    font-size: 1.5em;
  }

  @media (max-width: 576px) {
    font-size: 1.2em;
  }
`;

const List = styled.ul`
  list-style-type: disc;
  padding-left: 20px;
  text-align: justify;
  text-justify: inter-word;
  display: inline-block;

  @media (max-width: 768px) {
    padding-left: 10px;
  }

  @media (max-width: 576px) {
    padding-left: 5px;
  }
`;

const ListItem = styled.li`
  font-size: 1.2em;
  margin-bottom: 10px;
  color: #fff;
  font-family: 'Montserrat', sans-serif;
  text-align: justify;
  text-justify: inter-word;

  @media (max-width: 768px) {
    font-size: 1em;
  }

  @media (max-width: 576px) {
    font-size: 0.9em;
  }
`;

const BenefitText = styled.p`
  font-size: 1.2em;
  margin-bottom: 20px;
  text-align: center;
  color: #fff;
  font-family: 'Montserrat', sans-serif;

  @media (max-width: 768px) {
    font-size: 1em;
  }

  @media (max-width: 576px) {
    font-size: 0.9em;
  }
`;

const shine = keyframes`
  0% {
    background-position: -200px;
  }
  40%, 100% {
    background-position: 200px;
  }
`;

const BoldText = styled.span`
  font-weight: bold;
  display: inline-block;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.5), transparent);
  background-size: 200px 100%;
  animation: ${shine} 2s infinite;
  border-radius: 15px;
  padding: 0 5px;
  color: #FF9AE6;
  font-family: 'Montserrat', sans-serif;
`;

const Text = styled.span`
  font-weight: bold;
  color: #FF9AE6;
  font-family: 'Montserrat Alternates', sans-serif;
`;  

const Benefits = () => {
  const benefitsRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const rect = benefitsRef.current.getBoundingClientRect();
      if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
        benefitsRef.current.classList.add('visible');
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <BenefitsContainer ref={benefitsRef}>
      <Title>Beneficios del Cáñamo Industrial</Title>
      <BenefitText>El <Text>cáñamo industrial es un material versátil y sostenible</Text> que ofrece múltiples beneficios para la construcción:</BenefitText>
      <List>
        <ListItem><BoldText delay={0.2}>Eficiencia Energética:</BoldText> Actúa como aislante térmico y acústico, reduciendo el consumo energético.</ListItem>
        <ListItem><BoldText delay={0.4}>Durabilidad:</BoldText> Es resistente a plagas y moho, aumentando la longevidad de las edificaciones.</ListItem>
        <ListItem><BoldText delay={0.6}>Impacto Ambiental:</BoldText> Su cultivo mejora la calidad del suelo y requiere menos agua en comparación con otros cultivos.</ListItem>
      </List>
    </BenefitsContainer>
  );
}

export default Benefits;
