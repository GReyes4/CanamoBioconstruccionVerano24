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

const router = createBrowserRouter(
  createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index element={<HomePage />} />
        
      </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App
