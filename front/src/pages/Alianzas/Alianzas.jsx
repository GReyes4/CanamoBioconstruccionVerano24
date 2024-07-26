import './Alianzas.css'

import Navbar from '../../GlobalComponents/Navbar/Navbar.jsx';
import Footer from '../../pages/Proyecto/Footer.jsx';

import EMA from '../Alianzas/1EMA.png';
import JuanaVioleta from '../Alianzas/2JuanaVioleta.png';
import SMPS from '../Alianzas/3SMPS.png';
import TEC from '../Alianzas/4TEC.png';
import Chapingo from '../Alianzas/5Chapingo.png';
import Guadalajara from '../Alianzas/6Guadalajara.png';
import LibreDerecho from '../Alianzas/7LibreDerecho.png';
import UANL from '../Alianzas/8UANL.png';
import Sinaloa from '../Alianzas/9Sinaloa.png';
import LaSalle from '../Alianzas/10Salle.png';
import Nayarit from '../Alianzas/11Nayarit.png';
import UJED from '../Alianzas/12UJED.png';
import Milenium from '../Alianzas/13Milenium.png';
import TecNayarit from '../Alianzas/14TecNayarit.png';
import CaminataEpica from '../Alianzas/CaminataEpica.png';
import Flojo from '../Alianzas/Flojo.png';
import Flojo2 from '../Alianzas/Flojo2.png';



function Alianzas() {
  return (
    <>
      <Navbar></Navbar>
      <div>
        <section className="hero-section">
          <div className="hero-content">
            <h1 className="hero-title">Alianzas</h1>
          </div>
        </section>
        <section className="py-8 text-center bg-gray-100">
          <p className="text-lg">
            Conoce a las organizaciones, universidades, y simpatizantes que ayudan a hacer de nuestra visión, una
            realidad.
          </p>
        </section>
        <section className="py-8">
          <div className="container mx-auto">
            <h2 className="mb-8 text-2xl font-bold text-center">Organizaciones</h2>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              <div className="flex flex-col items-center p-4 bg-white border rounded shadow">
                <img src={EMA} alt="Organization 1" className="h-32 w-32 mb-4" />
                <p className="px-4 py-2 mt-auto">
                <a href="https://www.ema.org.mx/portal_v3/index.php/que-es-ema#:~:text=La%20entidad%20mexicana%20de%20acreditación,unidades%20de%20verificación%20(organismos%20de">
                  <button className="px-4 py-2 mt-auto text-white bg-green-700 rounded">Conoce Más</button>
                </a>
                </p>
              </div>
              <div className="flex flex-col items-center p-4 bg-white border rounded shadow">
                <img src={JuanaVioleta} alt="Organization 2" className="h-32 w-32 mb-4" />
                <p className="px-4 py-2 mt-auto">
                <a href="https://www.facebook.com/RedJuanaVioleta/">
                  <button className="px-4 py-2 mt-auto text-white bg-green-700 rounded">Conoce Más</button>
                </a>
                </p>
              </div>
              <div className="flex flex-col items-center p-4 bg-white border rounded shadow">
                <img src={SMPS} alt="Organization 3" className="h-32 w-32 mb-4" />
                <p className="px-4 py-2 mt-auto">
                <a href="https://smpslegal.com">
                  <button className="px-4 py-2 mt-auto text-white bg-green-700 rounded">Conoce Más</button>
                </a>
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="py-8">
          <div className="container mx-auto">
            <h2 className="mb-8 text-2xl font-bold text-center">Universidades</h2>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <div className="flex flex-col items-center p-4 bg-white border rounded shadow">
                <span className="px-2 py-1 mb-2 text-xs text-white bg-green-700 rounded">Servicio social</span>
                <img src={TEC} alt="University 1" className="h-32 w-32 mb-4" />
                <p className="mb-4 text-center">Instituto Tecnológico y de Estudios Superiores de Monterrey</p>
                <p className="px-4 py-2 mt-auto">
                <a href="https://tec.mx/es/vinculacion">
                  <button className="px-4 py-2 mt-auto text-white bg-green-700 rounded">Conoce Más</button>
                </a>
                </p>
              </div>
              <div className="flex flex-col items-center p-4 bg-white border rounded shadow">
                <span className="px-2 py-1 mb-2 text-xs text-white bg-green-700 rounded">Servicio social</span>
                <img src={Chapingo} alt="University 2" className="h-32 w-32 mb-4" />
                <p className="mb-4 text-center">Universidad Autónoma de Chapingo</p>
                <p className="px-4 py-2 mt-auto">
                <a href="https://chapingo.mx">
                  <button className="px-4 py-2 mt-auto text-white bg-green-700 rounded">Conoce Más</button>
                </a>
                </p>
              </div>
              <div className="flex flex-col items-center p-4 bg-white border rounded shadow">
                <span className="px-2 py-1 mb-2 text-xs text-white bg-green-700 rounded">Servicio social</span>
                <img src={Guadalajara} alt="University 3" className="h-32 w-32 mb-4" />
                <p className="mb-4 text-center">Universidad de Guadalajara</p>
                <p className="px-4 py-2 mt-auto">
                <a href="https://www.udg.mx/es">
                  <button className="px-4 py-2 mt-auto text-white bg-green-700 rounded">Conoce Más</button>
                </a>
                </p>
              </div>
              <div className="flex flex-col items-center p-4 bg-white border rounded shadow">
                <span className="px-2 py-1 mb-2 text-xs text-white bg-green-700 rounded">Servicio social</span>
                <img src={LibreDerecho} alt="University 4" className="h-32 w-32 mb-4" />
                <p className="mb-4 text-center">Facultad Libre De Derecho de Monterrey</p>
                <p className="px-4 py-2 mt-auto">
                <a href="https://fldm.edu.mx">
                  <button className="px-4 py-2 mt-auto text-white bg-green-700 rounded">Conoce Más</button>
                </a>
                </p>
              </div>
              <div className="flex flex-col items-center p-4 bg-white border rounded shadow">
                <span className="px-2 py-1 mb-2 text-xs text-white bg-green-700 rounded">Servicio social</span>
                <img src={UANL} alt="University 5" className="h-32 w-32 mb-4" />
                <p className="mb-4 text-center">Centro de Investigación y Docencia Económicas</p>
                <p className="px-4 py-2 mt-auto">
                <a href="https://www.uanl.mx">
                  <button className="px-4 py-2 mt-auto text-white bg-green-700 rounded">Conoce Más</button>
                </a>
                </p>
              </div>
              <div className="flex flex-col items-center p-4 bg-white border rounded shadow">
                <span className="px-2 py-1 mb-2 text-xs text-white bg-green-700 rounded">Servicio social</span>
                <img src={Sinaloa} alt="University 6" className="h-32 w-32 mb-4" />
                <p className="mb-4 text-center">Universidad Autónoma de Durango</p>
                <p className="px-4 py-2 mt-auto">
                <a href="https://www.uas.edu.mx">
                  <button className="px-4 py-2 mt-auto text-white bg-green-700 rounded">Conoce Más</button>
                </a>
                </p>
              </div>
              <div className="flex flex-col items-center p-4 bg-white border rounded shadow">
                <span className="px-2 py-1 mb-2 text-xs text-white bg-green-700 rounded">Servicio social</span>
                <img src={LaSalle} alt="University 7" className="h-32 w-32 mb-4" />
                <p className="mb-4 text-center">Instituto de Ciencias y Estudios Superiores de Tamaulipas</p>
                <p className="px-4 py-2 mt-auto">
                <a href="https://lasalle.mx">
                  <button className="px-4 py-2 mt-auto text-white bg-green-700 rounded">Conoce Más</button>
                </a>
                </p>
              </div>
              <div className="flex flex-col items-center p-4 bg-white border rounded shadow">
                <span className="px-2 py-1 mb-2 text-xs text-white bg-green-700 rounded">Servicio social</span>
                <img src={Nayarit} alt="University 8" className="h-32 w-32 mb-4" />
                <p className="mb-4 text-center">Universidad del Valle de México</p>
                <p className="px-4 py-2 mt-auto">
                <a href="https://www.uan.edu.mx">
                  <button className="px-4 py-2 mt-auto text-white bg-green-700 rounded">Conoce Más</button>
                </a>
                </p>
              </div>
              <div className="flex flex-col items-center p-4 bg-white border rounded shadow">
                <span className="px-2 py-1 mb-2 text-xs text-white bg-green-700 rounded">Servicio social</span>
                <img src={UJED} alt="University 9" className="h-32 w-32 mb-4" />
                <p className="mb-4 text-center">Universidad Autónoma de Nuevo León</p>
                <p className="px-4 py-2 mt-auto">
                <a href="https://www.ujed.mx">
                  <button className="px-4 py-2 mt-auto text-white bg-green-700 rounded">Conoce Más</button>
                </a>
                </p>
              </div>
              <div className="flex flex-col items-center p-4 bg-white border rounded shadow">
                <span className="px-2 py-1 mb-2 text-xs text-white bg-green-700 rounded">Servicio social</span>
                <img src={Milenium} alt="University 10" className="h-32 w-32 mb-4" />
                <p className="mb-4 text-center">Universidad Autónoma del Estado de Hidalgo</p>
                <p className="px-4 py-2 mt-auto">
                <a href="https://www.univermilenium.edu.mx">
                  <button className="px-4 py-2 mt-auto text-white bg-green-700 rounded">Conoce Más</button>
                </a>
                </p>
              </div>
              <div className="flex flex-col items-center p-4 bg-white border rounded shadow">
                <span className="px-2 py-1 mb-2 text-xs text-white bg-green-700 rounded">Servicio social</span>
                <img src={TecNayarit} alt="University 11" className="h-32 w-32 mb-4" />
                <p className="mb-4 text-center">Universidad Tecnológica de Nayarit</p>
                <p className="px-4 py-2 mt-auto">
                <a href="https://www.utnay.edu.mx">
                  <button className="px-4 py-2 mt-auto text-white bg-green-700 rounded">Conoce Más</button>
                </a>
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="benefits-section">
          <div className="container mx-auto">
            <div className="benefits-image-grid">
              <img src={Flojo} alt="Benefit 1" className="benefits-image" />
              <img src={Chapingo} alt="Benefit 2" className="benefits-image" />
              <img src={CaminataEpica} alt="Benefit 3" className="benefits-image" />
              <img src={Flojo2} alt="Benefit 4" className="benefits-image" />
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  )
}

export default Alianzas
