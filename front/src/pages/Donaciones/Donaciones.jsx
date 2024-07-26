import React, { useState } from 'react';
import Navbar from '../../GlobalComponents/Navbar/Navbar.jsx';
import Footer from '../Proyecto/Footer.jsx';
import imgVoluntariado from './IMG_4883.jpg';
import imgHeaderDonaciones from './IMG_4612.jpg';
import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js';

export default function Donaciones() {
  const [success, setSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [orderId, setOrderId] = useState(false);
  const [donationAmount, setDonationAmount] = useState(100); // Valor inicial de la donación

  const createOrder = (data, actions) => {
    return actions.order.create({
      purchase_units: [
        {
          description: 'Donación',
          amount: {
            currency_code: 'MXN',
            value: donationAmount,
          },
        },
      ],
      application_context: {
        shipping_preference: 'NO_SHIPPING',
      },
    }).then((orderId) => {
      setOrderId(orderId);
      return orderId;
    });
  };

  const onApprove = (data, actions) => {
    return actions.order.capture().then((details) => {
      const { payer } = details;
      setSuccess(true);
    });
  };

  const onError = (data, actions) => {
    setErrorMessage('Ha ocurrido un error con su pago');
  };

  const handleCustomAmountChange = (e) => {
    setDonationAmount(e.target.value);
  };

  return (
    <>
      <PayPalScriptProvider
        options={{
          clientId: 'AS_al8llhm_MBzFDyVcppvuggxyHMAhwPbi5vyEez-uEsTVHSadaCPSpGJ51mDGySs4yJdNY_ZT50F21', //Cambiar este valor por la ID del cliente
          currency: 'MXN',
        }}
      >
        <Navbar />
        <div className="min-h-screen bg-gray-100">
          <header
            className="relative w-full h-64 bg-cover bg-center"
            style={{ backgroundImage: `url(${imgHeaderDonaciones})` }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-50" />
            <div className="relative flex items-center justify-center h-full">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white text-center px-4">Apoya a la comunidad con una donación</h1>
            </div>
          </header>
          <main className="flex flex-col items-center py-8 space-y-8">
            <div className="flex flex-col items-center space-y-4 md:flex-row md:space-y-0 md:space-x-8 p-10">
              <div className="bg-custom-green text-white p-8 rounded-lg shadow-lg w-full max-w-md">
                <h2 className="text-3xl w-full text-white font-bold text-center py-2 px-4 rounded-lg">Donar a la causa</h2>
                <div className="space-y-4">
                  <div className="flex items-center p-4 border rounded-lg">
                    <input
                      type="radio"
                      id="amount50"
                      name="amount"
                      className="w-5 h-5 text-blue-600"
                      checked={donationAmount == 50}
                      onChange={() => setDonationAmount(50)}
                    />
                    <label htmlFor="amount50" className="ml-3 text-2xl font-bold">
                      $50
                    </label>
                  </div>
                  <div className="flex items-center p-4 border rounded-lg">
                    <input
                      type="radio"
                      id="amount100"
                      name="amount"
                      className="w-5 h-5 text-blue-600"
                      checked={donationAmount == 100}
                      onChange={() => setDonationAmount(100)}
                    />
                    <label htmlFor="amount100" className="ml-3 text-2xl font-bold">
                      $100
                    </label>
                  </div>
                  <div className="flex items-center p-4 border rounded-lg">
                    <input
                      type="radio"
                      id="amount200"
                      name="amount"
                      className="w-5 h-5 text-blue-600"
                      checked={donationAmount == 200}
                      onChange={() => setDonationAmount(200)}
                    />
                    <label htmlFor="amount200" className="ml-3 text-2xl font-bold">
                      $200
                    </label>
                  </div>
                  <div className="flex items-center p-4 border rounded-lg">
                    <input
                      type="radio"
                      id="customAmount"
                      name="amount"
                      className="w-5 h-5 text-blue-600"
                      checked={![50, 100, 200].includes(parseInt(donationAmount))}
                      onChange={() => setDonationAmount('')}
                    />
                    <input
                      type="text"
                      id="customAmountInput"
                      name="customAmount"
                      className="ml-3 w-60 p-2 border rounded-lg text-black"
                      placeholder="Custom"
                      value={donationAmount}
                      onChange={handleCustomAmountChange}
                    />
                  </div>
                </div>

                <div className="mt-6">
                  <PayPalButtons
                    key={donationAmount} // Force re-render on donation amount change
                    style={{ layout: 'vertical' }}
                    createOrder={createOrder}
                    onApprove={onApprove}
                    onError={onError}
                  />
                </div>
              </div>
              <div className="max-w-md space-y-4">
                <h2 className="text-3xl font-bold text-green-600">Ayuda a la Comunidad</h2>
                <p className="text-black text-justify">
                  Tu <span className="font-bold">donativo</span> nos ayuda a conseguir materiales para{' '}
                  <span className="font-bold text-green-600">ayudar a la comunidad nayeeri</span> como <span className="font-bold">fibra, paneles solares,
                  baños y cocinas.</span>
                </p>
              </div>
            </div>
            <div className="w-full bg-gray-200 p-10">
              <div className="max-w-4xl mx-auto flex flex-col items-center space-y-4 md:flex-row md:space-y-0 md:space-x-8">
                <div className="space-y-2 text-center md:text-left">
                  <h3 className="text-3xl font-bold text-gray-900 text-left">Voluntariado</h3>
                  <p className="text-lg text-black text-justify">Puedes apoyar con tu <span className="font-bold text-green-600">tiempo y habilidades</span> para ayudar al proyecto</p>
                  <div className="flex justify-center">
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
        <Footer />
      </PayPalScriptProvider>
    </>
  );
}
