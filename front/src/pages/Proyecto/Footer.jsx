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
  justify-content: space-between;
  align-items: center;
`;


const FooterContent = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  gap: 40px; 
`;


const FooterLinks = styled.div`
  display: flex;
  gap: 40px; 
`;


const FooterColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;


const SocialIcons = styled.div`
  display: flex;
  gap: 10px; 
    margin-right: 80px;
`;


const LogoImage = styled.img`
  height: 70px; 
  margin-left: 80px;
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
        <SocialIcon src={facebook} alt="Facebook" />
        <SocialIcon src={twitter} alt="Twitter" />
        <SocialIcon src={instagram} alt="Instagram" />
        <SocialIcon src={linkedin} alt="LinkedIn" />
        <SocialIcon src={youtube} alt="YouTube" />
        <SocialIcon src={whatsapp} alt="WhatsApp" />
      </SocialIcons>
    </FooterContainer>
  );
}

export default Footer;
