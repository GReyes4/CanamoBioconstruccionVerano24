import React from 'react';
import styled from 'styled-components';
import TwitterIcon from '../images/Twitter.png';
import InstagramIcon from '../images/Instagram.png';
import FacebookIcon from '../images/Facebook.png';
import LinkedInIcon from '../images/Linkedin.png';
import YoutubeIcon from '../images/Youtube.png';
import WhatsappIcon from '../images/whatsapplogo.png';
import HeaderImage from '../images/ArqIng/ai1.jpg';

const HeaderContainer = styled.header`
  position: relative;
  background-image: url(${HeaderImage});
  background-size: cover;
  background-position: center;
  color: #fff;
  padding: 120px;
  text-align: center;
  font-family: 'Montserrat', sans-serif;

  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.3);
    z-index: 1;
  }

  @media (max-width: 768px) {
    padding: 60px 20px;
  }
`;

const HeaderContent = styled.div`
  position: relative;
  z-index: 2;
  margin-top: 60px; /* To create space for social icons */
`;

const SocialIcons = styled.div`
  position: absolute;
  top: 20px;
  left: 20px;
  display: flex;
  justify-content: left;
  margin-bottom: 20px;
  z-index: 2;

  img {
    width: 30px;
    height: 30px;
    margin: 0 5px;
    filter: brightness(0) invert(0.7); /* Make icons slightly transparent */
  }

  @media (max-width: 768px) {
    top: 10px;
    left: 10px;
    img {
      width: 20px;
      height: 20px;
    }
  }
`;

const HeaderTitle = styled.h1`
  font-size: 3em;
  margin-bottom: 20px;
  font-family: 'Montserrat', sans-serif;

  @media (max-width: 768px) {
    font-size: 2em;
  }
`;

const HeaderButtons = styled.div`
  margin-top: 40px;

  button {
    background-color: #3E4D3D;
    color: #EAE6E3;
    border: none;
    padding: 10px 30px;
    margin: 0 20px;
    font-size: 1em;
    border-radius: 10px;
    cursor: pointer;
    font-family: 'Montserrat', sans-serif;

    @media (max-width: 768px) {
      margin: 10px 0;
      padding: 10px 20px;
    }
  }
`;

const Header = () => {
  return (
    <HeaderContainer>
      <SocialIcons>
        <img src={TwitterIcon} alt="Twitter" />
        <img src={InstagramIcon} alt="Instagram" />
        <img src={FacebookIcon} alt="Facebook" />
        <img src={LinkedInIcon} alt="LinkedIn" />
        <img src={YoutubeIcon} alt="YouTube" />
        <img src={WhatsappIcon} alt="WhatsApp" />
      </SocialIcons>
      <HeaderContent>
        <HeaderTitle>Galería de Fotos</HeaderTitle>
        <HeaderButtons>
          <button>Contáctanos</button>
          <button>Únete al voluntariado</button>
        </HeaderButtons>
      </HeaderContent>
    </HeaderContainer>
  );
}

export default Header;
