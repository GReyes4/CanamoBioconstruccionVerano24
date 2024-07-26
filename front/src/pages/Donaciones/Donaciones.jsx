import React from 'react'
import	'./Donaciones.css'

import Navbar from '../../GlobalComponents/Navbar/Navbar.jsx';
import Footer from '../Proyecto/Footer.jsx';
import imgVoluntariado from './IMG_4883.jpg';
import imgHeaderDonaciones from './IMG_4612.jpg';

//import { button } from "@/components/ui/button"
//import { input } from "@/components/ui/input"
//

export default function Donaciones() {
  return (
    <>
    <Navbar></Navbar>

    <div className="min-h-screen bg-gray-100">
      <header
        className="relative w-full h-64 bg-cover bg-center"
        style={{ backgroundImage: `url(${imgHeaderDonaciones})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <div className="relative flex items-center justify-center h-full">
          <h1 className="text-4xl font-bold text-white">Apoya a la comunidad con una donación</h1>
        </div>
      </header>
      <main className="flex flex-col items-center py-8 space-y-8">
        <div className="flex flex-col items-center space-y-4 md:flex-row md:space-y-0 md:space-x-8">
          <div className="bg-custom-green text-white p-8 rounded-lg shadow-lg w-full max-w-md">
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <button className="w-full bg-black text-white py-2 px-4 rounded-lg">$100</button>
                <input placeholder="Nombre" className="w-full bg-white text-black py-2 px-4 rounded-lg" />
              </div>
              <div className="flex items-center space-x-4">
                <button className="w-full bg-black text-white py-2 px-4 rounded-lg">$200</button>
                <input placeholder="Apellido Paterno" className="w-full bg-white text-black py-2 px-4 rounded-lg" />
              </div>
              <div className="flex items-center space-x-4">
                <button className="w-full bg-black text-white py-2 px-4 rounded-lg">$500</button>
                <input placeholder="Apellido Materno" className="w-full bg-white text-black py-2 px-4 rounded-lg" />
              </div>
              <div className="flex items-center space-x-4">
                <input placeholder="$ Otro" className="w-full bg-white text-black py-2 px-4 rounded-lg" />
                <input
                  placeholder="Correo electrónico"
                  className="w-full bg-white text-black py-2 px-4 rounded-lg"
                />
              </div>
              <div className="flex items-center space-x-4">
                <input placeholder="País" className="w-full bg-white text-black py-2 px-4 rounded-lg" />
                <input placeholder="Estado" className="w-full bg-white text-black py-2 px-4 rounded-lg" />
              </div>
              <div className="flex items-center space-x-4">
                <input placeholder="No. de tarjeta" className="w-1/2 bg-white text-black py-2 px-4 rounded-lg" />
                <input placeholder="mm/aa" className="w-1/4 bg-white text-black py-2 px-4 rounded-lg" />
                <input placeholder="CVV" className="w-1/4 bg-white text-black py-2 px-4 rounded-lg" />
            </div>
              <button className="w-full bg-pink-500 text-white py-2 px-4 rounded-lg">Hacer donativo</button>
            </div>
          </div>
          <div className="max-w-md space-y-4">
            <h2 className="text-4xl font-bold text-red-500">Ayuda a la Comunidad</h2>
            <p className="text-lg text-black">
              Tu <span className="font-bold">donativo</span> nos ayuda a conseguir materiales para{" "}
              <span className="font-bold text-red-500">ayudar a la comunidad nayeeri</span> como fibra, paneles solares,
              baños y cocinas
            </p>
          </div>
        </div>
        <div className="w-full bg-gray-200 py-8">
          <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8">
            <div className="space-y-2 text-center md:text-left">
              <h3 className="text-3xl font-bold text-gray-900">Voluntariado</h3>
              <p className="text-lg text-gray-700">Puedes apoyar con tu tiempo y habilidades para ayudar al proyecto</p>
              <div className="flex justify-left">
                <a href="https://docs.google.com/forms/d/e/1FAIpQLScNiR1w4if0bxEemmcuKKWMprZSLn-ay-tGbC9cKv5nP2a4AQ/viewform">
                <button className="bg-custom-green text-white py-3 px-6 rounded-lg">Unirse</button>
                </a>
            </div>
            </div>
            <div className="w-full max-w-md">
              <img src={imgVoluntariado} alt="Voluntariado" className="w-full h-auto rounded-lg shadow-lg" />
            </div>
          </div>
        </div>
      </main>
    </div>

    <Footer></Footer>
    </>
  )
}
