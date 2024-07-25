import Navbar from '../../GlobalComponents/Navbar/Navbar.jsx';
import Footer from '../Proyecto/Footer.jsx';

import iconoFacebook from '../Proyecto/images/Facebook.png';
import iconoInsta from '../Proyecto/images/Instagram.png';
import iconoTwitter from '../Proyecto/images/Twitter.png';
import iconoLinkedIn from '../Proyecto/images/Linkedin.png';
import iconoYoutube from '../Proyecto/images/Youtube.png';
import iconoWhats from '../Proyecto/images/whatsapplogo.png';
import imagenObjetivo from './ImagenObjetivo.png';
import imagenPresidente from './Presidente.png';
import imagenEventos from './ImgEventos.png';
import imagenDonaciones from './ImgDonaciones.png';
import imagenComunidad from './ImgComunidad.png';
import imgNoticiaSantaFe from './PresentacionSantaFe.png';
import imgNoticiaIngenieria from './PresentacionIngenieria.png';
import imgNoticiaArqui from './PresentacionArqui.png';

import { useNavigate} from "react-router-dom";

import './HomePage.css'

function HomePage() {
  const navigate = useNavigate();
  
    return (
      <>
      <Navbar />
      <div className="encabezado-div" >
        <div className='redes-sociales-div'>
        <a href="https://www.facebook.com/p/AMEEC-100082913041304/" target="_blank" rel="noopener noreferrer">
        <img src={iconoFacebook} className='social-icon' alt='Facebook' />
        </a>
        <a href="https://www.instagram.com/ameec.ac/?hl=es" target="_blank" rel="noopener noreferrer">
        <img src={iconoInsta} className='social-icon' alt='Instagram' />
        </a>
        <a href='https://twitter.com/AMEEC_ONG/' target='_blank' rel='noopener noreferrer'>
        <img src={iconoTwitter} className='social-icon' alt='Twitter' />
        </a>
        <a href='https://mx.linkedin.com/company/ameec' target='_blank' rel='noopener noreferrer'>
        <img src={iconoLinkedIn} className='social-icon' alt='LinkedIn' />
        </a>
        <a href="https://www.youtube.com/@ameec.ac.
        " target="_blank" rel="noopener noreferrer">
        <img src={iconoYoutube} className='social-icon' alt='YouTube' />
        </a>
        <a href='https://wa.me/523334988518' target='_blank' rel='noopener noreferrer'>
        <img src={iconoWhats} className='social-icon' alt='WhatsApp' />
        </a>
        </div>

        <div className='titulo-encabezado-div'>
          <h1 className='titulo-encabezado'> Bioconstrucción <br /> para el desarrollo </h1>
        </div>

        <div className='botones-encabezado-div'>
          <button className="encabezado-button">
            Contáctanos
          </button>
          <a href="https://negocios360.my.canva.site/copia-de-voluntariado" target='blank'>
            <button className="encabezado-button">
              Unete al voluntariado
            </button>
          </a>
        </div>
        
      </div>

      <div className='objetivo-proyecto-div'>
        <div className='titulo-objetivo-div'>
          <h1 className='titulo-objetivo'> Objetivo del <br /> proyecto </h1>
        </div>

        <div className='texto-objetivo-div'>
          <div className='fondo-texto-objetivo'>
            <p className='texto-objetivo'>El programa nace de la necesidad de resaltar los usos del <strong className='strongs'> cáñamo industrial</strong> y el impacto que se puede tener en el desarrollo de la comunidad de pueblos originarios llamados <strong className='strongs'> Naayeris o coras</strong>, ubicados en la localidad de <strong className='strongs'>Santa Teresa Del Nayar</strong>.</p>
            <p className='texto-objetivo'>Adicionalmente, como <strong className='strongs'>asociación</strong>, acompañamos al proyecto principal con acciones que atienden el área de <strong className='strongs'>responsabilidad social</strong>. Estas acciones están encaminadas hacia el <strong className='strongs'>desarrollo</strong> de la población, como dotar de un <strong className='strongs'>salón inteligente</strong> con todo el equipamiento necesario para la <strong className='strongs'>capacitación</strong> y regulación a distancia de los <strong className='strongs'>jóvenes (Coras)</strong>.</p>
          </div>
        </div>
      </div>

      <div className='objetivo-inferior-div'>
        <div className='texto-obj-inferior-div'> 
            <p className='texto-objetivo'> En esta <strong className='strongs'>localidad</strong>, se pretende realizar una <strong className='strongs'>bioconstrucción</strong> a base principalmente de un <strong className='strongs'>block</strong> que se le conoce como <strong className='strongs'>Hempcrete</strong>. La bioconstrucción estará acompañada de <strong className='strongs'>madera</strong>, materia prima que tiene la zona serrana y que se usa en la localidad para la <strong className='strongs'>construcción de sus viviendas</strong>.</p>
            <p className='texto-objetivo'>Además, buscamos el rescate del <strong className='strongs'>patrimonio cultural</strong> de la <strong className='strongs'>comunidad Naayeri</strong> a través de un centro cultural que tiene la intención de <strong className='strongs'>preservar y conservar su cultura</strong>.</p>
        </div>

        <div style={{display:'flex', justifyContent: 'center', alignItems:'center'}}>
          <img src={imagenObjetivo} className='imgObjetivo'/>
        </div>
      </div>

      <div className='mensaje-div'>
        <div style={{display:'flex', justifyContent: 'center', alignItems:'center'}}>
          <img src={imagenPresidente} className='imgPresidente'/>
        </div>

        <div className='texto-mensaje-div'>
          <h1 className='NombrePresi'>Manuel Rios</h1>
          <p className='texto-mensaje'>Visualice un México más <strong className='strongs'>equitativo</strong> y con las mismas oportunidades para todos, observando que el <strong className='strongs'>sector rural</strong> es donde menos oportunidades se tienen. <strong className='strongs'>AMEEC</strong> es su granito de arena y la forma de retribuir al país todo lo que le ha dado.</p>
        </div>
      </div>

      <div className='secciones-destacadas-div'>
        <img src={imagenEventos} className='imgDestacadas' onClick={() => navigate("/eventos")}/>
        <div className='texto-destacadas-div' onClick={() => navigate("/eventos")}>
          <h1 className='NombrePresi'> Eventos </h1>
        </div>
        <div className='texto-destacadas-div' onClick={() => navigate("/donaciones")}>
          <h1 className='NombrePresi'> Donaciones </h1>
        </div>
        <img src={imagenDonaciones} className='imgDestacadas' onClick={() => navigate("/donaciones")}/>
        <img src={imagenComunidad} className='imgDestacadas' onClick={() => navigate("/naayeri")}/>
        <div className='texto-destacadas-div' onClick={() => navigate("/naayeri")}>
          <h1 className='NombrePresi'> Comunidad </h1>
        </div>

      </div>

      <div className='noticias-recientes-div'>
        <h1 className='titulo-noticias'> Noticias Recientes </h1>

        <div className='carrusel-noticias'>
          <div className='tarjeta-noticias'>
            <img src={imgNoticiaSantaFe} className='imgNoticias'/>
            <h1 className='titulo-card'>Presentación 3 de junio Tec de monterrey Campus Santa fe</h1>
            <p className='texto-card'>lorem ipsum as sad asdas dasd asd asd asdsadsadasdasdasd asd asd asd asdasdas sad asdasdasdads</p>
          </div>

          <div className='tarjeta-noticias'>
            <img src={imgNoticiaIngenieria} className='imgNoticias'/>
            <h1 className='titulo-card'>Presentación final Ingeniería en desarrollo sustentable Tec de Monterrey Campus CDMX</h1>
            <p className='texto-card'>lorem ipsum as sad asdas dasd asd asd asdsadsadasdasdasd asd asd asd asdasdas sad asdasdasdads</p>
          </div>

          <div className='tarjeta-noticias'>
            <img src={imgNoticiaArqui} className='imgNoticias'/>
            <h1 className='titulo-card'>Presentación final Arquitectura Tec de Monterrey Campus CDMX</h1>
            <p className='texto-card'>lorem ipsum as sad asdas dasd asd asd asdsadsadasdasdasd asd asd asd asdasdas sad asdasdasdads</p>
          </div>
        </div>
      </div>

      <Footer/>
      </>
    )
}
  
export default HomePage