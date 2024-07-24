import React, { useState } from 'react';
import styled from 'styled-components';
import Footer from './Footer'; // Asegúrate de importar tu componente Footer
import whatsLogo from '../images/whatsapplogo2.png'; // Asegúrate de que la ruta es correcta

const FAQContainer = styled.section`
  padding: 40px 20px;
  background-color: #ff;
  text-align: center;
  font-family: 'Montserrat', sans-serif;
  
`;

const Title = styled.h2`
  font-size: 30px;
  margin-bottom: 10px;
  text-align: left;
  font-family: 'Montserrat', sans-serif;
  weight: 400;
  style: italic;
`;

const Title2 = styled.h2`
  font-size: 1.5em;
  margin-bottom: 10px;
  margin-top: 50px;
  text-align: left;
`;

const Title3 = styled.p`
  font-size: 1em;
  margin-bottom: 10px;
  text-align: left;
  font-family: 'Montserrat', sans-serif;
`;

const Subtitle = styled.p`
  font-size: 1em;
  margin-bottom: 1px;
  color: #555;
`;

const AccordionItem = styled.div`
  background-color: #fff;
  border: 1px solid #ddd;
  margin-bottom: 10px;
  border-radius: 5px;
`;

const AccordionHeader = styled.div`
  padding: 15px;
  font-size: 1.2em;
  font-weight: bold;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const AccordionContent = styled.div`
  padding: 15px;
  display: ${props => (props.isOpen ? 'block' : 'none')};
  text-align: left;
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;
  font-size: 1em;
  color: #555;
`;

const MapContainer = styled.div`
  height: 400px;
  width: 100%;
  margin-top: 20px;
`;

const WhatsAppIcon = styled.img`
  width: 50px;
  height: 50px;
  margin-top: 20px;
  
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border: 3px solid #3E4D3DEE;
  border-radius: 10px;
`;

const FormContainer = styled.div`
  flex: 1;
  margin-right: 250px;
  margin-top: 150px;
  
`;
const Textarea = styled.textarea`
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border: 3px solid #3E4D3DEE;
;
  border-radius: 10px;
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: #3E4D3D;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

const ContactContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 10px;
`;

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = index => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const questions = [
    { question: "¿Qué trabajo se está realizando en el tema de investigación?", answer: "En el campo de la investigación, nos estamos enfocando en dos áreas cruciales: la zonificación agroecológica y la estabilización de semillas. \n\n1. Zonificación Agroecológica: Este proceso implica determinar cuáles son las mejores zonas de México para el desarrollo óptimo de la planta de cáñamo, considerando aspectos técnicos, económicos, políticos, sociales y los riesgos implícitos. La zonificación nos permite identificar regiones con el entorno ideal para maximizar la productividad y sostenibilidad del cultivo. \n\n2. Estabilización de semillas: Estamos trabajando en colaboración con la Universidad Autónoma Chapingo en el desarrollo de semillas estabilizadas. Además, estamos en proceso de negociación con empresas extranjeras para importar estas semillas a México, siguiendo estrictos protocolos de investigación. Este esfuerzo nos permitirá mejorar la calidad y consistencia de las semillas disponibles para los agricultores mexicanos, asegurando cultivos más robustos y productivos. Este trabajo no solo impulsa el avance científico y tecnológico en el sector agroindustrial del cáñamo, sino que también fortalece la capacidad de México para competir en el mercado global." },
    { question: "¿Qué programas sociales desarrollarán para el 2025?", answer: "Para el año 2025, continuaremos con nuestros exitosos programas de emprendimiento en el sector textil y de conservas. Estos programas han demostrado ser vitales para el desarrollo económico y social de las comunidades involucradas. Adicionalmente, estamos avanzando en la construcción de nuestro proyecto de bioconstrucción, una iniciativa que promueve el uso de materiales sostenibles y técnicas ecológicas para la edificación, contribuyendo así al cuidado del medio ambiente y la autosuficiencia de las comunidades. Además, estamos emocionados de anunciar la introducción de un nuevo programa denominado \"Introducción de Animales de Granja\". Este programa está diseñado para capacitar a las comunidades en el manejo y cuidado de animales de granja, lo que les permitirá diversificar sus fuentes de ingreso y mejorar su seguridad alimentaria. Finalmente, también nos enfocaremos en dotar de semillas a los invernaderos comunitarios. Este esfuerzo ayudará a incrementar la producción agrícola local, promoviendo la autosuficiencia y sostenibilidad alimentaria. Estos programas reflejan nuestro compromiso con el desarrollo integral y sostenible de las comunidades, brindando herramientas y conocimientos para un futuro próspero y autosuficiente." },
    { question: "¿Cómo puedo sumarme como voluntario del proyecto de Bioconstrucción, se puede apoyar en línea?", answer: "Nos encantaría contar con tu participación en nuestro proyecto de Bioconstrucción. Para unirte como voluntario, tienes dos opciones: \n\nRegistro en Línea: Puedes registrarte fácilmente visitando nuestra página de voluntariado aquí y solicitar una reunión para discutir los detalles de tu colaboración. \n\nPágina Principal de la Asociación: También puedes visitar la página principal de nuestra asociación en www.ameec.org. Allí encontrarás un formulario de registro, y uno de los miembros de nuestro equipo se pondrá en contacto contigo para explicarte los beneficios y las formas en las que puedes colaborar con nosotros. Si prefieres colaborar en línea, también es posible. Tenemos mucho trabajo administrativo que requiere de tu apoyo y puedes contribuir significativamente desde cualquier lugar. Nos entusiasma la idea de trabajar contigo y estamos seguros de que tu apoyo será invaluable para el éxito de nuestros proyectos. ¡Tu participación puede marcar una gran diferencia!" },
    { question: "¿Cómo puedo financiar o hacer una donación al proyecto?", answer: "Estamos encantados de contar con tu apoyo para financiar o hacer una donación a nuestro proyecto. Tienes varias opciones para hacerlo: \n\nEn Línea: Puedes realizar tu donación directamente desde nuestra página web en el apartado de donaciones. Haz tu donación aquí. \n\nTeléfono: Si prefieres hablar con alguien de nuestro equipo, puedes comunicarte al teléfono 333-498-8518. Estaremos encantados de asistirte y proporcionarte toda la información que necesites para apoyar nuestros proyectos. Tu generosidad es fundamental para el éxito de nuestras iniciativas, y estamos agradecidos por tu contribución. \n\n¡Gracias por ayudar a hacer una diferencia!" },
    { question: "¿Qué otros programas sociales tiene AMEEC actualmente?", answer: "1. En AMEEC, estamos comprometidos con el desarrollo integral de las comunidades a través de una variedad de programas sociales. Actualmente, estamos llevando a cabo las siguientes iniciativas:  \
\n\n2. Emprendimientos Textiles y Conservas: Este programa apoya a emprendedores en la creación y comercialización de productos textiles y conservas de mermeladas de manzanas, duraznos e higos, fomentando el desarrollo económico local. \
\n\n3. Educación para el Desarrollo: Consiste en la donación de equipos de cómputo para el colectivo \"El Abuelo\", facilitando el acceso a la tecnología y mejorando las oportunidades educativas para los miembros de la comunidad. \
\n\n4. Olas de Amor: Un programa que incentiva a los niños que han obtenido las mejores calificaciones, reconociendo su esfuerzo académico y motivándolos a seguir destacando en sus estudios. \
\n\n5. Investigación en Zonificación Agroecológica: Este proyecto se centra en identificar las mejores zonas de México para el cultivo de diversas plantas, teniendo en cuenta factores técnicos, económicos, políticos, sociales y de riesgo. \
\n\n6. Estabilización de Semillas de Cáñamo: En colaboración con la Universidad Autónoma Chapingo, estamos trabajando en la estabilización de semillas de cáñamo. Además, estamos negociando con empresas extranjeras para traer estas semillas a México bajo estrictos protocolos de investigación. \
\n\nNos enorgullece el impacto positivo que estos programas están teniendo en las comunidades, y agradecemos tu interés en conocer más sobre nuestras iniciativas. \n\n¡Juntos podemos hacer la diferencia! \
" },
    { question: "¿Qué sucederá con el proyecto de Bioconstrucción una vez concluido?", answer: "Una vez finalizado el proyecto de Bioconstrucción, nuestro objetivo es replicar esta iniciativa en otros estados y comunidades de pueblos originarios. Comprendemos la importancia de apoyar a estas comunidades y, al mismo tiempo, promover el uso del cáñamo en la construcción en diversas regiones del país. \
La expansión de este proyecto permitirá no solo beneficiar a más comunidades, proporcionando soluciones de vivienda sostenibles y respetuosas con el medio ambiente, sino también educar y concienciar a un público más amplio sobre las múltiples aplicaciones del cáñamo en la industria de la construcción. \
Estamos comprometidos a continuar con este esfuerzo, asegurando que cada nueva implementación del proyecto mantenga los altos estándares de calidad y sostenibilidad que caracterizan nuestras iniciativas. ¡Tu apoyo y colaboración son esenciales para hacer de este proyecto un éxito continuo en todo México! \
" },
    { question: "¿Dónde puedo saber más sobre el proyecto?", answer: "Puedes obtener más información sobre nuestro proyecto a través de varios canales: \
\n\n1. Newsletter: Suscríbete a nuestro boletín informativo para recibir actualizaciones periódicas, noticias y detalles sobre el progreso del proyecto directamente en tu correo electrónico. \
\n\n2. Página Web: Visita nuestra página web para encontrar información detallada y actualizaciones frecuentes sobre el proyecto. Mantendremos este espacio actualizado con las últimas novedades y avances. \
\n\n3. Redes Sociales: Síguenos en nuestras redes sociales para estar al tanto de todas las actividades, eventos y noticias relacionadas con el proyecto. Publicamos contenido regularmente para mantener a nuestra comunidad informada y comprometida. \
\n\nEstamos encantados de compartir nuestro trabajo contigo y agradecemos tu interés en conocer más sobre nuestras iniciativas. ¡Únete a nosotros y sé parte del cambio! \
" }
  ];
  const renderAnswer = (text) => {
    return text.split('\n').map((line, index) => (
      <React.Fragment key={index}>
        {line}
        <br />
      </React.Fragment>
    ));
  };



  return (
    <div>
      <FAQContainer>
        <Title>Preguntas frecuentes</Title>
        {questions.map((item, index) => (
          <AccordionItem key={index}>
            <AccordionHeader onClick={() => toggleAccordion(index)}>
              {item.question}
              <span>{openIndex === index ? '▲' : '▼'}</span>
            </AccordionHeader>
            <AccordionContent isOpen={openIndex === index}>
              {renderAnswer(item.answer)}
            </AccordionContent>
          </AccordionItem>
        ))}
        <Title2>¿Otra duda? Contáctanos</Title2>
        <ContactContainer>
        <FormContainer>
          <form>
            <Title3>Correo Electrónico</Title3>
          <Input type="email" placeholder="" />
            <Title3>Asunto</Title3>
            <Input type="text" placeholder="" />
            <Title3>Mensaje</Title3>
            <Textarea placeholder="" rows="5" />
            <Button type="submit">Enviar</Button>
          </form>

        </FormContainer> 
        <ContactInfo>
        <Subtitle>Información de contacto:</Subtitle>
          <Subtitle>Correo: contacto@ameec.org</Subtitle>
          
          <Subtitle>WhatsApp: +52-33-3498-8518</Subtitle>
          <WhatsAppIcon src={whatsLogo} alt="WhatsApp Logo" />
          <Subtitle>Tepic, Nayarit</Subtitle>
          <Subtitle>Ubicación: Construcción 795 Col. Santa Teresita CP 63020 Tepic Nayarit.</Subtitle>
          <MapContainer>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3733.797322205609!2d-104.897122!3d21.52644!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x842738e5123e4d45%3A0x54076c61bb663b20!2s21%C2%B031%2735.2%22N%20104%C2%B053%2749.6%22W!5e0!3m2!1ses!2smx!4v1627076892664!5m2!1ses!2smx"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              title="Google Maps"
            ></iframe>
          </MapContainer>
        </ContactInfo>
        </ContactContainer>
      </FAQContainer>
      
    </div>
  );
};

export default FAQ;
