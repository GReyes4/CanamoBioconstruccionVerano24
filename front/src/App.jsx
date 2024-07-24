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
import Proyecto from "./pages/Proyecto/Proyecto.jsx";

// Naayeri
import Naayeri from "./pages/Naayeri/Naayeri.jsx";

//Alianzas
import Alianzas from "./pages/Alianzas/Alianzas.jsx";

//Nosotros
import Nosotros from "./pages/Nosotros/Nosotros.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
      <Route path="/" element={<Root />} errorElement={<HomePage />}>
        <Route index element={<HomePage />} />
        <Route path="canamo" element={<CanamoConecta />} />
        <Route path="proyecto" element={<Proyecto />} />
        <Route path="naayeri" element={<Naayeri />} />
        <Route path="alianzas" element={<Alianzas />} />
        <Route path="nosotros" element={<Nosotros />} />
      </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App
