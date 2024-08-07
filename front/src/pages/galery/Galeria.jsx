import React, { useState } from 'react';
import styled from 'styled-components';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import Navbar from '../../GlobalComponents/Navbar/Navbar.jsx';
import Footer from '../Proyecto/Footer.jsx';
import Header from './Header2.jsx';
import Bar from './Bar.jsx';
import ameec from '../Proyecto/images/ameec_logo.png';

import ai1 from '../Proyecto/images/ArqIng/ai1.jpg';
import ai2 from '../Proyecto/images/ArqIng/ai2.jpg';
import ai3 from '../Proyecto/images/ArqIng/ai3.jpg';
import ai4 from '../Proyecto/images/ArqIng/ai4.jpg';
import aiv1 from '../Proyecto/images/ArqIng/aiv1.mov';
import aiv2 from '../Proyecto/images/ArqIng/aiv2.mov';

import a1 from '../Proyecto/images/FinalArq/a1.jpg';
import a2 from '../Proyecto/images/FinalArq/a2.jpg';  
import a3 from '../Proyecto/images/FinalArq/a3.jpg';
import av1 from '../Proyecto/images/FinalArq/av1.mov';
import av2 from '../Proyecto/images/FinalArq/av2.mov';

import i1 from '../Proyecto/images/FinalIng/i1.jpg';
import i2 from '../Proyecto/images/FinalIng/i2.jpg';
import i3 from '../Proyecto/images/FinalIng/i3.jpg';
import i4 from '../Proyecto/images/FinalIng/i4.jpg';
import i5 from '../Proyecto/images/FinalIng/i5.jpg';
import i6 from '../Proyecto/images/FinalIng/i6.jpg';
import i7 from '../Proyecto/images/FinalIng/i7.jpg';
import iv1 from '../Proyecto/images/FinalIng/iv1.mov';
import iv2 from '../Proyecto/images/FinalIng/iv2.mov';

const GaleriaContainer = styled.div`
  font-family: 'Montserrat', sans-serif;
  padding: 0;
  margin: 0;
  text-align: center;
  width: 100vw;
  overflow: hidden;
`;

const Title = styled.h2`
  font-size: 2em;
  margin-bottom: 20px;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 1.5em;
  }
`;

const AlbumContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-bottom: 40px;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    gap: 10px;
  }
`;

const Album = styled.div`
  cursor: pointer;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 2px gray;
  padding: 25px;

  .images {
    display: flex;
    gap: 8px;

    img {
      width: 120px;
      height: 170px;
      object-fit: cover;

      @media (max-width: 768px) {
        width: 80px;
        height: 120px;
      }
    }
  }

  p {
    font-weight: 400;
    margin: 0;
    white-space: pre-line;
    font-size: 1.2em;

    @media (max-width: 768px) {
      font-size: 1em;
    }
  }
`;

const SelectedAlbumTitle = styled.h3`
  font-size: 2em;
  margin-bottom: 0px;
  padding-top: 20px;

  @media (max-width: 768px) {
    font-size: 1.5em;
  }
`;

const CarouselContainer = styled.div`
  position: relative;
  width: 80%;
  margin: 0 auto 40px;
  overflow: hidden;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Carousel = styled.div`
  display: flex;
  transition: transform 0.5s ease-in-out;
`;

const CarouselItem = styled.div`
  min-width: 100%;
`;

const Arrow = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
  ${(props) => props.left ? 'left: 0;' : 'right: 0;'}

  @media (max-width: 768px) {
    top: 90%;
  }
`;

const Indicators = styled.div`
  display: flex;
  justify-content: center;
  margin-top: -20px;
  padding-bottom: 100px;

  @media (max-width: 768px) {
    padding-bottom: 50px;
  }
`;

const Indicator = styled.div`
  height: 10px;
  width: 10px;
  margin: 0 5px;
  background-color: ${(props) => (props.active ? '#000' : '#ccc')};
  border-radius: 50%;
  display: inline-block;
`;

const Ameec = styled.img`
  width: 180px;
  height: 180px;
  margin-top: -100px;
  margin-bottom: -20px;
  
  @media (max-width: 768px) {
    width: 40px;
    height: 40px;
    margin-top: 15px;
  }
`;

const ImageContainer = styled.div`
  width: 1229px;
  height: 774px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  padding: 48px;

  @media (max-width: 768px) {
    width: 100%;
    height: auto;
    padding: 20px;
  }

  img {
    max-width: 90%;
    max-height: 90%;
    padding-bottom: 100px;

    @media (max-width: 768px) {
      padding-bottom: 20px;
    }
  }
`;

const Galeria = () => {
  const albums = [
    {
      title: '4.1 Presentación \nArquitectura e Ingeniería',
      images: [ai1, ai2, ai3, ai4],
      videos: [aiv1, aiv2]
    },
    {
      title: '4.2 Presentación \nFinal Ingeniería',
      images: [i4, i5, i6, i7],
      videos: [iv1, iv2]
    },
    {
      title: '4.3 Presentación \nFinal Arq',
      images: [a1, a2, a3],
      videos: [av1, av2]
    },
  ];

  const [selectedAlbum, setSelectedAlbum] = useState(albums[0]);
  const [imageIndex, setImageIndex] = useState(0);
  const [videoIndex, setVideoIndex] = useState(0);

  const handleAlbumClick = (album) => {
    setSelectedAlbum(album);
    setImageIndex(0);
    setVideoIndex(0);
  };

  const nextImage = () => {
    setImageIndex((prevIndex) => (prevIndex + 1) % selectedAlbum.images.length);
  };

  const prevImage = () => {
    setImageIndex((prevIndex) => (prevIndex - 1 + selectedAlbum.images.length) % selectedAlbum.images.length);
  };

  const nextVideo = () => {
    setVideoIndex((prevIndex) => (prevIndex + 1) % selectedAlbum.videos.length);
  };

  const prevVideo = () => {
    setVideoIndex((prevIndex) => (prevIndex - 1 + selectedAlbum.videos.length) % selectedAlbum.videos.length);
  };

  return (
    
    <GaleriaContainer>
      <Navbar />
      <Header />
      <Bar />
      <Title>Eventos</Title>
      <AlbumContainer>
        {albums.map((album) => (
          <Album key={album.title} onClick={() => handleAlbumClick(album)}>
            <div className="images">
              <img src={album.images[0]} alt={album.title} />
              <img src={album.images[2]} alt={album.title} />
            </div>
            <p>{album.title}</p>
          </Album>
        ))}
      </AlbumContainer>
      <SelectedAlbumTitle>{selectedAlbum.title}</SelectedAlbumTitle>
      <CarouselContainer>
        <Carousel style={{ transform: `translateX(-${imageIndex * 100}%)` }}>
          {selectedAlbum.images.map((image, idx) => (
            <CarouselItem key={idx}>
              <ImageContainer>
                <img src={image} alt={`Imagen ${idx + 1}`} />
              </ImageContainer>
            </CarouselItem>
          ))}
        </Carousel>
        <Arrow left onClick={prevImage}><FaArrowLeft size={30} /></Arrow>
        <Arrow onClick={nextImage}><FaArrowRight size={30} /></Arrow>
        
        <Indicators>
          {/*{selectedAlbum.images.map((_, idx) => (
            <Indicator key={idx} active={idx === imageIndex} />
          ))}*/}
        </Indicators>
      </CarouselContainer>
      <CarouselContainer>
        <Carousel style={{ transform: `translateX(-${videoIndex * 100}%)` }}>
          {selectedAlbum.videos.map((video, idx) => (
            <CarouselItem key={idx}>
              <video src={video} controls style={{ width: '82%' }} />
            </CarouselItem>
          ))}
        </Carousel>
        <Arrow left onClick={prevVideo}><FaArrowLeft size={30} /></Arrow>
        <Arrow onClick={nextVideo}><FaArrowRight size={30} /></Arrow>
        <Indicators>
          {selectedAlbum.videos.map((_, idx) => (
            <Indicator key={idx} active={idx === videoIndex} />
          ))}
        </Indicators>
      </CarouselContainer>
      <Ameec src={ameec} alt="AMEEC" />
      <Footer/>
    </GaleriaContainer>
  );
};

export default Galeria;
