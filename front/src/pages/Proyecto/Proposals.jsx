import React from 'react';
import styled from 'styled-components';
import prop2 from './images/prop2.jpg';
import prop3 from './images/prop3.jpg';
import prop4 from './images/prop4.jpg';
import prop6 from './images/prop6.jpg';
import prop7 from './images/prop7.jpg';
import prop8 from './images/prop8.jpg';


const ProposalsContainer = styled.section`
  padding: 40px 20px;
  background-color: #D9D9D9;
  text-align: center;
  font-family: 'Montserrat', sans-serif;
`;

const Title = styled.h2`
  font-size: 2em;
  margin-bottom: 20px;
  font-family: 'Montserrat', sans-serif;
  color: #3E4D3D;

  @media (max-width: 768px) {
    font-size: 1.5em;
  }

  @media (max-width: 576px) {
    font-size: 1.2em;
  }
`;

const ProposalsGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
`;

const ProposalCard = styled.div`
  background-color: #D9D9D9;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  width: 600px;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const ProposalsText = styled.p`
  font-size: 1em;
  font-family: 'Montserrat', sans-serif;
  text-align: justify;
  text-justify: inter-word;

  @media (max-width: 1200px) {
    font-size: 0.9em;
  }

  @media (max-width: 992px) {
    font-size: 0.8em;
  }

  @media (max-width: 768px) {
    font-size: 0.9em;
  }

  @media (max-width: 576px) {
    font-size: 1em;
  }
`;

const Gallery = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
`;

const ImageWrapper = styled.div`
  width: 30%;

  @media (max-width: 768px) {
    width: 45%;
  }

  @media (max-width: 480px) {
    width: 90%;
  }
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  border-radius: 5px;
`;

const Text = styled.span`
font-weight: bold;
color: #49994D;
font-family: 'Montserrat Alternates', sans-serif;  
`;

const Proposals = () => {
  return (
    <ProposalsContainer>
      <Title>Propuestas de Diseño y Energía Sostenible</Title>
      <ProposalsGrid>
        <ProposalCard>
          <ProposalsText>
            Los talentosos alumnos del <Text>Tec de Monterrey</Text> presentaron sus propuestas de diseño y fuentes de energía sostenible,
            <Text> utilizando cáñamo industrial como material principal.</Text> Este proyecto no solo promueve la utilización de materiales ecológicos y renovables,
            sino que también busca empoderar a las comunidades indígenas, respetando y preservando su patrimonio cultural.
          </ProposalsText>
          <Gallery>
            <ImageWrapper>
              <Image src={prop2} alt="Propuesta 2" />
            </ImageWrapper>
            <ImageWrapper>
              <Image src={prop3} alt="Propuesta 3" />
            </ImageWrapper>
            <ImageWrapper>
              <Image src={prop4} alt="Propuesta 4" />
            </ImageWrapper>
            <ImageWrapper>
              <Image src={prop6} alt="Propuesta 6" />
            </ImageWrapper>
            <ImageWrapper>
              <Image src={prop7} alt="Propuesta 7" />
            </ImageWrapper>
            <ImageWrapper>
              <Image src={prop8} alt="Propuesta 8" />
            </ImageWrapper>
          </Gallery>
        </ProposalCard>
      </ProposalsGrid>
    </ProposalsContainer>
  );
}

export default Proposals;
