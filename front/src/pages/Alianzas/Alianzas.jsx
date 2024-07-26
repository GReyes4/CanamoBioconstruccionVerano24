import './Alianzas.css'

import Navbar from '../../GlobalComponents/Navbar/Navbar.jsx';
import Footer from '../../pages/Proyecto/Footer.jsx';

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
                <img src="\src\pages\Alianzas\Images\1EMA.png" alt="Organization 1" className="h-32 w-32 mb-4" />
                <button className="px-4 py-2 mt-auto text-white bg-green-700 rounded">Conoce Más</button>
              </div>
              <div className="flex flex-col items-center p-4 bg-white border rounded shadow">
                <img src="\src\pages\Alianzas\Images\2JuanaVioleta.png" alt="Organization 2" className="h-32 w-32 mb-4" />
                <button className="px-4 py-2 mt-auto text-white bg-green-700 rounded">Conoce Más</button>
              </div>
              <div className="flex flex-col items-center p-4 bg-white border rounded shadow">
                <img src="\src\pages\Alianzas\Images\3SMPS.png" alt="Organization 3" className="h-32 w-32 mb-4" />
                <button className="px-4 py-2 mt-auto text-white bg-green-700 rounded">Conoce Más</button>
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
                <img src="\src\pages\Alianzas\Images\4TEC.png" alt="University 1" className="h-32 w-32 mb-4" />
                <p className="mb-4 text-center">Instituto Tecnológico y de Estudios Superiores de Monterrey</p>
                <button className="px-4 py-2 mt-auto text-white bg-green-700 rounded">Conoce Más</button>
              </div>
              <div className="flex flex-col items-center p-4 bg-white border rounded shadow">
                <span className="px-2 py-1 mb-2 text-xs text-white bg-green-700 rounded">Servicio social</span>
                <img src="\src\pages\Alianzas\Images\5Chapingo.png" alt="University 2" className="h-32 w-32 mb-4" />
                <p className="mb-4 text-center">Universidad Autónoma de Chapingo</p>
                <button className="px-4 py-2 mt-auto text-white bg-green-700 rounded">Conoce Más</button>
              </div>
              <div className="flex flex-col items-center p-4 bg-white border rounded shadow">
                <span className="px-2 py-1 mb-2 text-xs text-white bg-green-700 rounded">Servicio social</span>
                <img src="\src\pages\Alianzas\Images\6Guadalajara.png" alt="University 3" className="h-32 w-32 mb-4" />
                <p className="mb-4 text-center">Universidad de Guadalajara</p>
                <button className="px-4 py-2 mt-auto text-white bg-green-700 rounded">Conoce Más</button>
              </div>
              <div className="flex flex-col items-center p-4 bg-white border rounded shadow">
                <span className="px-2 py-1 mb-2 text-xs text-white bg-green-700 rounded">Servicio social</span>
                <img src="\src\pages\Alianzas\Images\7LibreDerecho.png" alt="University 4" className="h-32 w-32 mb-4" />
                <p className="mb-4 text-center">Facultad Libre De Derecho de Monterrey</p>
                <button className="px-4 py-2 mt-auto text-white bg-green-700 rounded">Conoce Más</button>
              </div>
              <div className="flex flex-col items-center p-4 bg-white border rounded shadow">
                <span className="px-2 py-1 mb-2 text-xs text-white bg-green-700 rounded">Servicio social</span>
                <img src="\src\pages\Alianzas\Images\8UANL.png" alt="University 5" className="h-32 w-32 mb-4" />
                <p className="mb-4 text-center">Centro de Investigación y Docencia Económicas</p>
                <button className="px-4 py-2 mt-auto text-white bg-green-700 rounded">Conoce Más</button>
              </div>
              <div className="flex flex-col items-center p-4 bg-white border rounded shadow">
                <span className="px-2 py-1 mb-2 text-xs text-white bg-green-700 rounded">Servicio social</span>
                <img src="\src\pages\Alianzas\Images\9Sinaloa.png" alt="University 6" className="h-32 w-32 mb-4" />
                <p className="mb-4 text-center">Universidad Autónoma de Durango</p>
                <button className="px-4 py-2 mt-auto text-white bg-green-700 rounded">Conoce Más</button>
              </div>
              <div className="flex flex-col items-center p-4 bg-white border rounded shadow">
                <span className="px-2 py-1 mb-2 text-xs text-white bg-green-700 rounded">Servicio social</span>
                <img src="\src\pages\Alianzas\Images\10Salle.png" alt="University 7" className="h-32 w-32 mb-4" />
                <p className="mb-4 text-center">Instituto de Ciencias y Estudios Superiores de Tamaulipas</p>
                <button className="px-4 py-2 mt-auto text-white bg-green-700 rounded">Conoce Más</button>
              </div>
              <div className="flex flex-col items-center p-4 bg-white border rounded shadow">
                <span className="px-2 py-1 mb-2 text-xs text-white bg-green-700 rounded">Servicio social</span>
                <img src="\src\pages\Alianzas\Images\11Nayarit.png" alt="University 8" className="h-32 w-32 mb-4" />
                <p className="mb-4 text-center">Universidad del Valle de México</p>
                <button className="px-4 py-2 mt-auto text-white bg-green-700 rounded">Conoce Más</button>
              </div>
              <div className="flex flex-col items-center p-4 bg-white border rounded shadow">
                <span className="px-2 py-1 mb-2 text-xs text-white bg-green-700 rounded">Servicio social</span>
                <img src="\src\pages\Alianzas\Images\12UJED.png" alt="University 9" className="h-32 w-32 mb-4" />
                <p className="mb-4 text-center">Universidad Autónoma de Nuevo León</p>
                <button className="px-4 py-2 mt-auto text-white bg-green-700 rounded">Conoce Más</button>
              </div>
              <div className="flex flex-col items-center p-4 bg-white border rounded shadow">
                <span className="px-2 py-1 mb-2 text-xs text-white bg-green-700 rounded">Servicio social</span>
                <img src="\src\pages\Alianzas\Images\13Milenium.png" alt="University 10" className="h-32 w-32 mb-4" />
                <p className="mb-4 text-center">Universidad Autónoma del Estado de Hidalgo</p>
                <button className="px-4 py-2 mt-auto text-white bg-green-700 rounded">Conoce Más</button>
              </div>
              <div className="flex flex-col items-center p-4 bg-white border rounded shadow">
                <span className="px-2 py-1 mb-2 text-xs text-white bg-green-700 rounded">Servicio social</span>
                <img src="\src\pages\Alianzas\Images\14TecNayarit.png" alt="University 11" className="h-32 w-32 mb-4" />
                <p className="mb-4 text-center">Universidad Tecnológica de Nayarit</p>
                <button className="px-4 py-2 mt-auto text-white bg-green-700 rounded">Conoce Más</button>
              </div>
            </div>
          </div>
        </section>
        <section className="benefits-section">
          <div className="container mx-auto">
            <div className="benefits-content">
              <div className="benefits-text">
                <p>Las alianzas con universidades e investigadores ofrecen acceso a investigaciones de vanguardia y recursos intelectuales esenciales para el desarrollo de proyectos innovadores.</p>
                <p>Colaborar con laboratorios permite realizar pruebas rigurosas, asegurando la calidad y seguridad de los productos, y facilitando la validación científica.</p>
                <p>Las empresas aportan experiencia práctica, recursos financieros y acceso a mercados, impulsando el desarrollo tecnológico y comercialización de nuevos productos.</p>
                <p>Estas alianzas estratégicas amplían el alcance y el impacto de la asociación, optimizando recursos y mejorando la eficiencia operativa.</p>
                <p>Además, universidades, laboratorios y empresas fortalecen la capacidad institucional, mejoran las habilidades del personal y aumentan la credibilidad y legitimidad de la asociación, atrayendo más apoyo y colaboradores.</p>
              </div>
              <div className="benefits-images">
                <img src="\src\pages\Alianzas\Images\8UANL.png" alt="Meeting" className="benefits-image" />
                <img src="\src\pages\Alianzas\Images\8UANL.png" alt="Building" className="benefits-image" />
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  )
}

export default Alianzas
