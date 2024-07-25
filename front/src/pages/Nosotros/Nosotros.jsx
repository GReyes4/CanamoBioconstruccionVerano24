import Navbar from '../../GlobalComponents/Navbar/Navbar.jsx';
import Footer from '../Proyecto/Footer.jsx';
import React from 'react';
import './Nosotros.css';

import RubenImagen from '../../assets/images/profeRuben.jpg';
import ClaudiaImagen from '../../assets/images/mcClaudia.jpg';
import BogdanImagen from '../../assets/images/arqBogdan.png';

const Nosotros = () => {
  return (
    <div className="Nosotros">
      <Navbar />
      <main>
        <section className="main-content">
          <div className="text-section">
            <h1>Breve Historia de AMEEC</h1>
            <p>
              <br /> 
              Somos una <span className="montserrat-alternate">asociación civil </span>  
              sin fines de lucro, donde nuestro 
              principal enfoque es <span className="montserrat-alternate">investigar y promover</span> el conocimiento sobre 
              el cannabis <span className="montserrat-alternate">"Cáñamo Medicinal e Industrial"</span> y sus diversos usos.
              <br /> <br />
              Uno de los principales objetivos de <strong>AMEEC</strong> es buscar el impulso y 
              el <span className="montserrat-alternate">desarrollo económico de comunidades rurales y de pueblos 
              originarios</span> a través de lo que existe en su entorno.
              <br /> <br />
            </p>
          </div>
          <div className="image-section">
            <img src="/src/assets/images/Fundadores.png" alt="Fundadores" />
          </div>
        </section>
        <section className="input-section">
          <div className="newsletter-container">
            <h2>Suscríbete a nuestro boletín de noticias</h2>
            <h3>Mantente al tanto con noticias recientes, actualizaciones y demás</h3>
            <input type="text" placeholder="Introduce tu correo" />
            <button><strong>¡Haz click aquí!</strong></button>
          </div>
        </section>
        <section className="gallery-section">
          <h1>Profesores involucrados en el programa</h1>
          <div className='gallery'>
            <a href="https://www.linkedin.com/in/ruben-ahumada-lazo-32373168/?originalSubdomain=mx" target='blank'>
              <div className='gallery-item'>
                <img src={RubenImagen} alt="Profesor Rubén"/>
                <h2>Dr. Ruben Ahumada-Lazo</h2>
              </div>
            </a>
            <a href="https://www.researchgate.net/profile/Claudia-Compean-Gonzalez" target='blank'>
              <div className='gallery-item'>
                <img src={ClaudiaImagen} alt="M.C Claudia"/>
                <h2>M.C. Claudia Lorena Compeán González</h2>
              </div>
            </a>

            <a href="https://www.linkedin.com/in/bogdan-mircea-ilie/" target='blank'>
              <div className='gallery-item'>
                <img src={BogdanImagen} alt="Arq. Bogdan"/>
                <h2>Arq. Bogdan Mircea Ilie</h2>
              </div>
            </a>

          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Nosotros;
