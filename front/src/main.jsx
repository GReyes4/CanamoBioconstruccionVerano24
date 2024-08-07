import React from 'react'

// Componente principal
import App from "./App.jsx";

// Para el enrutamiento
import ReactDOM from "react-dom/client";

import {NextUIProvider} from "@nextui-org/react";

//Importar api de PayPal
import { PayPalScriptProvider } from "@paypal/react-paypal-js";


import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NextUIProvider>
    <App />
    </NextUIProvider>
  </React.StrictMode>
)
