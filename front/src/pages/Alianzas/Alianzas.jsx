import './Alianzas.css'


import Navbar from '../../GlobalComponents/Navbar/Navbar.jsx';
import Footer from '../../pages/Proyecto/Footer.jsx';

function Alianzas() {
    return (
      <>
        <Navbar></Navbar>
        <div>
      <section
        className="relative w-full h-64 bg-cover bg-center"
        style={{ backgroundImage: "url('/background.jpg')" }}
      >
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <h1 className="text-4xl font-bold text-white">Alianzas</h1>
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
              <img src="/placeholder.svg" alt="Organization 1" className="h-24 mb-4" />
              <button className="px-4 py-2 mt-auto text-white bg-green-700 rounded">Conoce Más</button>
            </div>
            <div className="flex flex-col items-center p-4 bg-white border rounded shadow">
              <img src="/placeholder.svg" alt="Organization 2" className="h-24 mb-4" />
              <button className="px-4 py-2 mt-auto text-white bg-green-700 rounded">Conoce Más</button>
            </div>
            <div className="flex flex-col items-center p-4 bg-white border rounded shadow">
              <img src="/placeholder.svg" alt="Organization 3" className="h-24 mb-4" />
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
              <img src="/placeholder.svg" alt="University 1" className="h-24 mb-4" />
              <p className="mb-4 text-center">Instituto Tecnológico y de Estudios Superiores de Monterrey</p>
              <button className="px-4 py-2 mt-auto text-white bg-green-700 rounded">Conoce Más</button>
            </div>
            <div className="flex flex-col items-center p-4 bg-white border rounded shadow">
              <span className="px-2 py-1 mb-2 text-xs text-white bg-green-700 rounded">Servicio social</span>
              <img src="/placeholder.svg" alt="University 2" className="h-24 mb-4" />
              <p className="mb-4 text-center">Universidad Autónoma de Chapingo</p>
              <button className="px-4 py-2 mt-auto text-white bg-green-700 rounded">Conoce Más</button>
            </div>
            <div className="flex flex-col items-center p-4 bg-white border rounded shadow">
              <span className="px-2 py-1 mb-2 text-xs text-white bg-green-700 rounded">Servicio social</span>
              <img src="/placeholder.svg" alt="University 3" className="h-24 mb-4" />
              <p className="mb-4 text-center">Universidad de Guadalajara</p>
              <button className="px-4 py-2 mt-auto text-white bg-green-700 rounded">Conoce Más</button>
            </div>
            <div className="flex flex-col items-center p-4 bg-white border rounded shadow">
              <span className="px-2 py-1 mb-2 text-xs text-white bg-green-700 rounded">Servicio social</span>
              <img src="/placeholder.svg" alt="University 4" className="h-24 mb-4" />
              <p className="mb-4 text-center">Facultad Libre De Derecho de Monterrey</p>
              <button className="px-4 py-2 mt-auto text-white bg-green-700 rounded">Conoce Más</button>
            </div>
            <div className="flex flex-col items-center p-4 bg-white border rounded shadow">
              <span className="px-2 py-1 mb-2 text-xs text-white bg-green-700 rounded">Prácticas Profesionales</span>
              <img src="/placeholder.svg" alt="University 5" className="h-24 mb-4" />
              <p className="mb-4 text-center">Universidad Nacional Autónoma de México</p>
              <button className="px-4 py-2 mt-auto text-white bg-green-700 rounded">Conoce Más</button>
            </div>
            <div className="flex flex-col items-center p-4 bg-white border rounded shadow">
              <span className="px-2 py-1 mb-2 text-xs text-white bg-green-700 rounded">Servicio social</span>
              <img src="/placeholder.svg" alt="University 6" className="h-24 mb-4" />
              <p className="mb-4 text-center">Universidad Autónoma de Sinaloa</p>
              <button className="px-4 py-2 mt-auto text-white bg-green-700 rounded">Conoce Más</button>
            </div>
            <div className="flex flex-col items-center p-4 bg-white border rounded shadow">
              <span className="px-2 py-1 mb-2 text-xs text-white bg-green-700 rounded">Servicio social</span>
              <img src="/placeholder.svg" alt="University 7" className="h-24 mb-4" />
              <p className="mb-4 text-center">Universidad La Salle Nezahualcóyotl</p>
              <button className="px-4 py-2 mt-auto text-white bg-green-700 rounded">Conoce Más</button>
            </div>
            <div className="flex flex-col items-center p-4 bg-white border rounded shadow">
              <span className="px-2 py-1 mb-2 text-xs text-white bg-green-700 rounded">Prácticas Profesionales</span>
              <img src="/placeholder.svg" alt="University 8" className="h-24 mb-4" />
              <p className="mb-4 text-center">Universidad Autónoma de Nayarit</p>
              <button className="px-4 py-2 mt-auto text-white bg-green-700 rounded">Conoce Más</button>
            </div>
            <div className="flex flex-col items-center p-4 bg-white border rounded shadow">
              <span className="px-2 py-1 mb-2 text-xs text-white bg-green-700 rounded">Servicio social</span>
              <img src="/placeholder.svg" alt="University 9" className="h-24 mb-4" />
              <p className="mb-4 text-center">Universidad Juárez Del Estado De Durango</p>
              <button className="px-4 py-2 mt-auto text-white bg-green-700 rounded">Conoce Más</button>
            </div>
            <div className="flex flex-col items-center p-4 bg-white border rounded shadow">
              <span className="px-2 py-1 mb-2 text-xs text-white bg-green-700 rounded">Servicio social</span>
              <img src="/placeholder.svg" alt="University 10" className="h-24 mb-4" />
              <p className="mb-4 text-center">Univer Milenium</p>
              <button className="px-4 py-2 mt-auto text-white bg-green-700 rounded">Conoce Más</button>
            </div>
            <div className="flex flex-col items-center p-4 bg-white border rounded shadow">
              <span className="px-2 py-1 mb-2 text-xs text-white bg-green-700 rounded">Servicio social</span>
              <img src="/placeholder.svg" alt="University 11" className="h-24 mb-4" />
              <p className="mb-4 text-center">Universidad Tecnológica de Nayarit</p>
              <button className="px-4 py-2 mt-auto text-white bg-green-700 rounded">Conoce Más</button>
            </div>
            <div className="flex flex-col items-center p-4 bg-white border rounded shadow">
              <span className="px-2 py-1 mb-2 text-xs text-white bg-green-700 rounded">Servicio social</span>
              <img src="/placeholder.svg" alt="University 12" className="h-24 mb-4" />
              <p className="mb-4 text-center">Universidad Tecnológica de Nayarit</p>
              <button className="px-4 py-2 mt-auto text-white bg-green-700 rounded">Conoce Más</button>
            </div>
          </div>
        </div>
      </section>
      <section className="py-8 bg-green-800 text-white">
        <div className="container mx-auto">
          <h2 className="mb-8 text-2xl font-bold text-center">Beneficios de las alianzas</h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div className="space-y-4">
              <p>
                Las alianzas con universidades e investigadores ofrecen acceso a investigaciones de vanguardia y
                recursos intelectuales esenciales para el desarrollo de proyectos innovadores.
              </p>
              <p>
                Colaborar con laboratorios permite realizar pruebas rigurosas, asegurando la calidad y seguridad de los
                productos, y facilitando la validación científica.
              </p>
            </div>
            <img src="/placeholder.svg" alt="Benefits" className="rounded" />
          </div>
        </div>
      </section>
    </div>
        <Footer />
      </>
    )
}

export default Alianzas
