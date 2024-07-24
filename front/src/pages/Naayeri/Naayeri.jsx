import Navbar from '../../GlobalComponents/Navbar/Navbar.jsx';
import Footer from '../Proyecto/Footer.jsx';

import imagenConoceComunidad from './ConoceComunidad.png';
import videoFondo from './VideoEncabezadoNaayeri.mp4'; // Asegúrate de que la ruta sea correcta

import './Naayeri.css'

function Naayeri() {
  
    return (
      <>
      <Navbar />
      <div className="encabezado-naayeri-div" >
        <video className="video-fondo" autoPlay loop muted>
          <source src={videoFondo} type="video/mp4" />
            Tu navegador no soporta la reproducción de video.
        </video>
        <h1 className='titulo-naayeri-encabezado'> Comunidad Naayeri </h1>
      </div>

      <div className='conoce-comunidad-div'>
        <h1 className='conoce-comunidad-titulo'>Conoce a la Comunidad</h1>
        <div className='grid-conoce-comunidad'>
          <p className='texto-conoce-comunidad'>Es una comunidad conocida como los Naayeris, uno de los pueblos originarios representativos del estado de Nayarit. <br/> <br/> 
          Dentro de las actividades productivas que la comunidad tenía era la siembra y cultivo de la amapola, misma que en años actuales, ha disminuido sus valores del mercado, haciendo que uno de los principales pilares económicos de la comunidad desapareciera. <br/> <br/>
          Nuestro reto, a través de los ODS y las alianzas estratégicas es poder generar proyectos de impacto para que las personas pertenecientes a los pueblos originarios puedan tener una mejor calidad de vida. <br/> <br/>
          La mayoría de los hombres en edad productiva están emigrado de manera ilegal en busca de mejores oportunidades a Estados Unidos, así como a zonas costeras donde se dedican al corte de frutas por un pago aprox. de 200 pesos por jornadas completas. </p>
          <img src={imagenConoceComunidad} className='imgConoceComunidad'/>
        </div>
      </div>

      <div className='relevancia-div'>
        <div style={{display:'flex', justifyContent: 'end'}}>
          <h1 className='relevancia-titulo'>Su Relevancia para la Bioconstrucción</h1>
        </div>
        <div className='grid-conoce-comunidad'>
          <p className='texto-conoce-comunidad'>Es una comunidad conocida como los Naayeris, uno de los pueblos originarios representativos del estado de Nayarit. <br/> <br/> 
          Dentro de las actividades productivas que la comunidad tenía era la siembra y cultivo de la amapola, misma que en años actuales, ha disminuido sus valores del mercado, haciendo que uno de los principales pilares económicos de la comunidad desapareciera. <br/> <br/>
          Nuestro reto, a través de los ODS y las alianzas estratégicas es poder generar proyectos de impacto para que las personas pertenecientes a los pueblos originarios puedan tener una mejor calidad de vida. <br/> <br/>
          La mayoría de los hombres en edad productiva están emigrado de manera ilegal en busca de mejores oportunidades a Estados Unidos, así como a zonas costeras donde se dedican al corte de frutas por un pago aprox. de 200 pesos por jornadas completas. </p>
          <img src={imagenConoceComunidad} className='imgConoceComunidad'/>
        </div>
      </div>

      <Footer/>
      </>
    )
}
  
export default Naayeri