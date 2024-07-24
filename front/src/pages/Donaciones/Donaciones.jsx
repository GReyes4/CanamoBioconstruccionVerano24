import React from 'react'
import	'./Donaciones.css'

import Navbar from '../../GlobalComponents/Navbar/Navbar.jsx';
import Footer from '../Proyecto/Footer.jsx';

//import { Button } from "@/components/ui/button"
//import { Input } from "@/components/ui/input"


export default function Donaciones() {
  return (
    <>
    <Navbar></Navbar>
    
    <div className="min-h-screen bg-gray-100">
      <header
        className="relative w-full h-64 bg-cover bg-center"
        style={{ backgroundImage: "url(/path/to/your/image.jpg)" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <div className="relative flex items-center justify-center h-full">
          <h1 className="text-4xl font-bold text-white">Donar</h1>
        </div>
      </header>
      <main className="flex flex-col items-center py-8 space-y-8">
        <div className="flex flex-col items-center space-y-4 md:flex-row md:space-y-0 md:space-x-8">
          <div className="bg-gray-900 text-white p-8 rounded-lg shadow-lg w-full max-w-md">
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <Button className="w-full bg-black text-white py-2 px-4 rounded-lg">$100</Button>
                <Input placeholder="Nombre" className="w-full bg-gray-700 text-white py-2 px-4 rounded-lg" />
              </div>
              <div className="flex items-center space-x-4">
                <Button className="w-full bg-black text-white py-2 px-4 rounded-lg">$200</Button>
                <Input placeholder="Apellido Paterno" className="w-full bg-gray-700 text-white py-2 px-4 rounded-lg" />
              </div>
              <div className="flex items-center space-x-4">
                <Button className="w-full bg-black text-white py-2 px-4 rounded-lg">$500</Button>
                <Input placeholder="Apellido Materno" className="w-full bg-gray-700 text-white py-2 px-4 rounded-lg" />
              </div>
              <div className="flex items-center space-x-4">
                <Button className="w-full bg-black text-white py-2 px-4 rounded-lg">$ Otro</Button>
                <Input
                  placeholder="Correo electrónico"
                  className="w-full bg-gray-700 text-white py-2 px-4 rounded-lg"
                />
              </div>
              <div className="flex items-center space-x-4">
                <Input placeholder="No. de tarjeta" className="w-full bg-gray-700 text-white py-2 px-4 rounded-lg" />
                <Input placeholder="País" className="w-full bg-gray-700 text-white py-2 px-4 rounded-lg" />
              </div>
              <div className="flex items-center space-x-4">
                <Input placeholder="mm/aa" className="w-full bg-gray-700 text-white py-2 px-4 rounded-lg" />
                <Input placeholder="CVV" className="w-full bg-gray-700 text-white py-2 px-4 rounded-lg" />
                <Input placeholder="Estado" className="w-full bg-gray-700 text-white py-2 px-4 rounded-lg" />
              </div>
              <Button className="w-full bg-pink-500 text-white py-2 px-4 rounded-lg">Hacer donativo</Button>
            </div>
          </div>
          <div className="max-w-md space-y-4">
            <h2 className="text-2xl font-bold text-red-500">Ayuda a la Comunidad</h2>
            <p className="text-black">
              Tu <span className="font-bold">donativo</span> nos ayuda a conseguir materiales para{" "}
              <span className="font-bold text-blue-500">ayudar a la comunidad nayeei</span> como fibra, paneles solares,
              baños y cocinas
            </p>
          </div>
        </div>
        <div className="w-full bg-gray-200 py-8">
          <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8">
            <div className="space-y-2 text-center md:text-left">
              <h3 className="text-xl font-bold text-gray-900">Voluntariado</h3>
              <p className="text-gray-700">Puedes apoyar con tu tiempo y habilidades para ayudar al proyecto</p>
              <Button className="bg-green-500 text-white py-2 px-4 rounded-lg">Unirse</Button>
            </div>
            <div className="w-full max-w-md">
              <img src="/placeholder.svg" alt="Voluntariado" className="w-full h-auto rounded-lg shadow-lg" />
            </div>
          </div>
        </div>
      </main>
    </div>

    <Footer></Footer>
    </>
  )
}
