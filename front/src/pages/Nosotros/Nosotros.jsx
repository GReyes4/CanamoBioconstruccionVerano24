import Navbar from '../../GlobalComponents/Navbar/Navbar.jsx';
import Footer from '../Proyecto/Footer.jsx';
import React from 'react';
import './Nosotros.css';

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
              Somos una <span className="montserrat-alternate">asociación civil</span>  
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
          <h2>Title</h2>
          <div className="gallery">
            <div className="gallery-item">
              <img src="path/to/image1.jpg" alt="Image 1" />
              <button>Button</button>
            </div>
            <div className="gallery-item">
              <img src="path/to/image2.jpg" alt="Image 2" />
              <button>Button</button>
            </div>
            <div className="gallery-item">
              <img src="path/to/image3.jpg" alt="Image 3" />
              <button>Button</button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Nosotros;
