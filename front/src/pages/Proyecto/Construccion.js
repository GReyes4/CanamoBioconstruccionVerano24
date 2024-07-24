import React from 'react';
import styled from 'styled-components';

const ConstruccionContainer = styled.section`
  padding: 40px 20px;
  background-color: #eae6e3;
  text-align: center;
  font-family: 'Montserrat', sans-serif;
`;

const Title = styled.h2`
  font-size: 2em;
  margin-bottom: 20px;
  font-family: 'Montserrat', sans-serif;
`;

const ConstruccionGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
`;

const ConstruccionCard = styled.div`
  background-color: #eae6e3;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  width: 600px;
`;



const ConstruccionText = styled.p`
    font-size: 1em;
    font-family: 'Montserrat', sans-serif;
    text-align: left;
    `;

const VideoContainer = styled.div`
    display: flex;
    justify-content: center;
`;


const Construccion = () => {
  return (
    <ConstruccionContainer>
      <Title>Construcción Sostenible con Cáñamo Industrial</Title>
      <ConstruccionGrid>
        <ConstruccionCard>
        <ConstruccionText>
        En <strong>AMEEC</strong>, estamos comprometidos con el <strong>desarrollo sostenible y la inclusión de tecnologías innovadoras en la construcción. </strong>
          Recientemente, en colaboración con el Departamento de Arquitectura, Ingenieria civil e Ingeniería en Desarrollo Sustentable del Tec de Monterrey Campus Santa Fe y Campus CDMX, 
         hemos iniciado un <strong>emocionante proyecto enfocado en la construcción sostenible en la comunidad Nayeeri de Santa Teresa del Nayar.</strong>
          </ConstruccionText>
          <VideoContainer>
            <iframe 
            width="100%" 
            height="315" 
            src="https://www.youtube.com/embed/5oS2NbamNyQ" 
            title="Presentación ITESM Bioconstrucción para el desarrollo AMEEC" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowfullscreen>
            </iframe>
            </VideoContainer> 
        </ConstruccionCard>
      </ConstruccionGrid>
    </ConstruccionContainer>
  );
}

export default Construccion;