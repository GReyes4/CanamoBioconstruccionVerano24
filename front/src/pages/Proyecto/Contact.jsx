import React from 'react';
import styled, { keyframes } from 'styled-components';
import treeImage from './images/ameec_logo.png'; // Asegúrate de que la ruta sea correcta

const ContactContainer = styled.section`
  padding: 40px 20px;
  background-color: #eae6e3;
  text-align: center;
  font-family: 'Montserrat', sans-serif;
`;

const Title = styled.h2`
  font-size: 2em;
  margin-bottom: 10px;
`;

const Subtitle = styled.p`
  font-size: 1em;
  margin-bottom: 30px;
  color: #555;
`;

const Form = styled.form`
  max-width: 600px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;

const InputGroup = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 5px;

  @media (min-width: 768px) {
    width: ${props => (props.fullWidth ? '100%' : 'calc(50% - 10px)')};
  }
`;

const Label = styled.label`
  font-size: 1em;
  color: #5f7d63;
`;

const Input = styled.input`
  width: 90%;
  padding: 10px;
  border: none;
  border-radius: 5px;
  background-color: #6b7b63;
  color: #fff;
  font-size: 1em;
`;

const Input2 = styled.input`
  width: 43.5%;
  padding: 10px;
  border: none;
  border-radius: 5px;
  background-color: #6b7b63;
  color: #fff;
  font-size: 1em;
`;

const Input3 = styled.input`
  width: 95%;
  padding: 10px;
  border: none;
  border-radius: 5px;
  background-color: #6b7b63;
  color: #fff;
  font-size: 1em;
`;

const TextArea = styled.textarea`
  width: 95%;
  padding: 10px;
  border: none;
  border-radius: 5px;
  background-color: #6b7b63;
  color: #fff;
  font-size: 1em;
`;

const SubmitButton = styled.button`
  width: 98.5%;
  padding: 10px;
  border: none;
  border-radius: 5px;
  background-color: #5f7d63;
  color: #fff;
  font-size: 1em;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #4a5d4a;
  }
`;

const treeAnimation = keyframes`
  0% { transform: translateX(-100%); }
  25% { transform: translateX(0); }
  75% { transform: translateX(0); }
  100% { transform: translateX(100%); }
`;

const fadeIn = keyframes`
  0%, 50%, 100% { opacity: 0; }
  25%, 75% { opacity: 1; }
`;

const TreeContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 40px;
`;

const TreeImage = styled.img`
  width: 180px;
  animation: ${treeAnimation} 20s linear infinite;
`;

const ContactInfo = styled.div`
  text-align: center;
  margin-top: 20px;
  font-family: 'Montserrat', sans-serif;
  animation: ${fadeIn} 20s linear infinite;
`;

const Contact = () => {
  return (
    <ContactContainer>
      <Title>¿QUIERES PARTICIPAR?</Title>
      <Subtitle>Llama o escríbenos y nos pondremos en contacto contigo lo antes posible.</Subtitle>
      <Form>
        <InputGroup>
          <Label>Nombre y apellidos</Label>
          <Input type="text" placeholder="Escribe tu nombre..." />
        </InputGroup>
        <InputGroup>
          <Label>Email</Label>
          <Input type="email" placeholder="Escribe tu email..." />
        </InputGroup>
        <InputGroup fullWidth>
          <Label>Número de teléfono</Label>
          <Input2 type="text" placeholder="+52 ..." />
        </InputGroup>
        <InputGroup fullWidth>
          <Label>Asunto</Label>
          <Input3 type="text" placeholder="Escribe aquí..." />
        </InputGroup>
        <InputGroup fullWidth>
          <Label>Mensaje</Label>
          <TextArea rows="5" placeholder="Escribe aquí..." />
        </InputGroup>
        <InputGroup fullWidth>
          <SubmitButton type="submit">Enviar</SubmitButton>
        </InputGroup>
      </Form>
      <TreeContainer>
        <TreeImage src={treeImage} alt="Tree" />
      </TreeContainer>
      <ContactInfo>
        <p>Correo: contacto@ameec.org</p>
        <p>Whatsapp: +52-33-3498-8518</p>
      </ContactInfo>
    </ContactContainer>
  );
}

export default Contact;
