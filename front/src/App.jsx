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

const router = createBrowserRouter(
  createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index element={<HomePage />} />
        <Route path="canamo" element={<CanamoConecta />} />
        <Route path="proyecto" element={<Proyecto />} />
        
      </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App
