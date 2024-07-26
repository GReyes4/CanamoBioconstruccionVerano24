import React from 'react';
import styled from 'styled-components';
import ameec from './images/ameec.png';
import facebook from './images/Facebook.png';
import twitter from './images/Twitter.png';
import instagram from './images/Instagram.png';
import linkedin from './images/Linkedin.png';
import youtube from './images/Youtube.png';
import whatsapp from './images/whatsapplogo.png';


const FooterContainer = styled.footer`
  background-color: #3E4D3D;
  color: #fff;
  padding: 20px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;

  @media (max-width: 1200px) {
  
    gap: 40px;

  }

`;


const FooterContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  gap: 40px; 



`;


const FooterLinks = styled.div`
  display: flex;
  gap: 40px; 

  @media (max-width: 500px) {
  
    text-align: start;
    justify-content: start;
    flex-direction: column;

  }

`;


const FooterColumn = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 10px;
`;


const SocialIcons = styled.div`
  display: flex;
  gap: 10px; 

`;


const LogoImage = styled.img`
  height: 70px; 
`;


const SocialIcon = styled.img`
  height: 30px; 
`;


const FooterText = styled.p`
  margin: 0;
  font-family: 'Montserrat', sans-serif;
`;

const FooterLink = styled.a`
  color: #fff;
  text-decoration: none; /* Elimina la línea por defecto */
  
  &:hover {
    text-decoration: underline; /* Añade subrayado al pasar el cursor */
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <LogoImage src={ameec} alt="Logo" />

      <FooterContent>
        <FooterLinks>
          <FooterColumn>
            <FooterText><FooterLink href="#about" style={{ color: '#fff' }}>Sobre Nosotros</FooterLink></FooterText>
            <FooterText><FooterLink href="#community" style={{ color: '#fff' }}>Comunidad Nayeeri</FooterLink></FooterText>
            <FooterText><FooterLink href="#connect" style={{ color: '#fff' }}>Cañamo Conecta</FooterLink></FooterText>
          </FooterColumn>
          <FooterColumn>
            <FooterText><FooterLink href="#bioconstruction" style={{ color: '#fff' }}>Bioconstrucción para el Desarrollo</FooterLink></FooterText>
            <FooterText><FooterLink href="#alliances" style={{ color: '#fff' }}>Alianzas</FooterLink></FooterText>
            <FooterText><FooterLink href="#gallery" style={{ color: '#fff' }}>Galería</FooterLink></FooterText>
          </FooterColumn>
          <FooterColumn>
            <FooterText><FooterLink href="#donations" style={{ color: '#fff' }}>Donaciones</FooterLink></FooterText>
            <FooterText><FooterLink href="#faq" style={{ color: '#fff' }}>FAQ</FooterLink></FooterText>
            <FooterText><FooterLink href="#contact" style={{ color: '#fff' }}>Contacto</FooterLink></FooterText>
          </FooterColumn>
        </FooterLinks>
      </FooterContent>

      <SocialIcons>
        <a href="https://www.facebook.com/p/AMEEC-100082913041304/" target="_blank" rel="noopener noreferrer">
          <SocialIcon src={facebook} alt="Facebook" />
        </a>
        <a href='https://twitter.com/AMEEC_ONG/' target='_blank' rel='noopener noreferrer'>
          <SocialIcon src={twitter} alt="Twitter" />
        </a>
        <a href="https://www.instagram.com/ameec.ac/?hl=es" target="_blank" rel="noopener noreferrer">
          <SocialIcon src={instagram} alt="Instagram" />
        </a>
        <a href='https://mx.linkedin.com/company/ameec' target='_blank' rel='noopener noreferrer'>
          <SocialIcon src={linkedin} alt="LinkedIn" />
        </a>
        <a href="https://www.youtube.com/@ameec.ac." target="_blank" rel="noopener noreferrer">
          <SocialIcon src={youtube} alt="YouTube" />
        </a>
        <a href='https://wa.me/523334988518' target='_blank' rel='noopener noreferrer'>
          <SocialIcon src={whatsapp} alt="WhatsApp" />
        </a>  
      </SocialIcons>
    </FooterContainer>
  );
}

export default Footer;
