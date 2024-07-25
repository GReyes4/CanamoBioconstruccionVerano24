import React from 'react';
import styled, { keyframes } from 'styled-components';
import com1 from '../images/com1.png';
import com2 from '../images/com2.png';
import com3 from '../images/com3.png';
import com4 from '../images/com4.png';
import video from '../images/videoCom.MOV';

const CommunityContainer = styled.section`
  padding: 40px 20px;
  background-color: #fff;
  text-align: center;
  font-family: 'Montserrat', sans-serif;
`;

const Title = styled.h2`
  font-size: 45px;
  margin-bottom: 0px;
  font-family: 'Montserrat', sans-serif;
  font-weight: 400;
  text-align: center;
  color: #3E4D3D;

  @media (max-width: 768px) {
    font-size: 35px;
  }

  @media (max-width: 576px) {
    font-size: 28px;
  }
`;

const CommunityText = styled.p`
  font-family: 'Montserrat', sans-serif;
  font-size: 18px;
  font-weight: 400;
  margin-bottom: 20px;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 16px;
  }

  @media (max-width: 576px) {
    font-size: 14px;
  }
`;

const VideoContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

const Video = styled.video`
  width: 40%;
  height: auto;
  border-radius: 10px;
  object-fit: cover;

  @media (max-width: 768px) {
    width: 60%;
  }

  @media (max-width: 576px) {
    width: 80%;
  }
`;

const slide = keyframes`
  0% { transform: translateX(0); }
  25% { transform: translateX(-100%); }
  50% { transform: translateX(-200%); }
  75% { transform: translateX(-300%); }
  100% { transform: translateX(0); }
`;

const CarouselContainer = styled.div`
  overflow: hidden;
  width: 80%;
  margin: 0 auto 20px auto;
  position: relative;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const CarouselContent = styled.div`
  display: flex;
  animation: ${slide} 40s infinite linear;
`;

const CarouselImage = styled.img`
  width: 85%;
  height: 500px;
  object-fit: cover;
  border-radius: 10px;

  @media (max-width: 768px) {
    width: 100%;
    height: auto;
  }
`;

const ImageWrapper = styled.div`
  min-width: 100%;
  padding: 0 5px; /* Espacio entre imágenes */
`;

const Community = () => {
  return (
    <CommunityContainer>
      <Title>Comunidad Beneficiada</Title>
      <CommunityText>Naayeris (Coras)</CommunityText>
      <CommunityText>Santa Teresa Del Nayar</CommunityText>

      <CarouselContainer>
        <CarouselContent>
          <ImageWrapper>
            <CarouselImage src={com1} alt="Image 1" />
          </ImageWrapper>
          <ImageWrapper>
            <CarouselImage src={com2} alt="Image 2" />
          </ImageWrapper>
          <ImageWrapper>
            <CarouselImage src={com3} alt="Image 3" />
          </ImageWrapper>
          <ImageWrapper>
            <CarouselImage src={com4} alt="Image 4" />
          </ImageWrapper>
        </CarouselContent>
      </CarouselContainer>

      <VideoContainer>
        <Video controls>
          <source src={video} type="video/mp4" />
          Tu navegador no soporta el elemento de video.
        </Video>
      </VideoContainer>
    </CommunityContainer>
  );
}

export default Community;
