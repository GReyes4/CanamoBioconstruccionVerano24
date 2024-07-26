import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

// Estructura base
import Root from "./pages/Root/Root.jsx";

// Home
import HomePage from "./pages/HomePage/HomePage.jsx";

// Canamo Conecta
import CanamoConecta from "./pages/CanamoConecta/CanamoConecta.jsx";

// Proyecto
import Proyecto from "./pages/Proyecto/ProyectBio.jsx";

// Naayeri
import Naayeri from "./pages/Naayeri/Naayeri.jsx";

// Nosotros
import Nosotros from "./pages/Nosotros/Nosotros.jsx";

// Alianzas
import Alianzas from "./pages/Alianzas/Alianzas.jsx";

// Galeria
import Galeria from "./pages/galery/Galeria.jsx";

// Donaciones
import Donaciones from "./pages/Donaciones/Donaciones.jsx";

// Preguntas frecuentes
import Preguntas from "./pages/faq/Faq.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
      <Route path="/" element={<Root />} errorElement={<HomePage />}>
        <Route index element={<HomePage />} />
        <Route path="canamo" element={<CanamoConecta />} />
        <Route path="proyecto" element={<Proyecto />} />
        <Route path="naayeri" element={<Naayeri />} />
        <Route path="alianzas" element={<Alianzas />} />
        <Route path="nosotros" element={<Nosotros />} />
        <Route path="galeria" element={<Galeria />} />
        <Route path="donaciones" element={<Donaciones />} />
        <Route path="preguntas" element={<Preguntas />} />
      </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
