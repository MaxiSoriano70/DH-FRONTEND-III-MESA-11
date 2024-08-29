import { Route, Routes } from "react-router-dom";
import { routes } from "./utils/routes";
import Home from "./pages/Home";
import Contacto from "./pages/Contacto";
import DetalleBeer from "./pages/DetalleBeer";
import Navbar from "./components/Navbar";
import Error404 from "./pages/Error404";

function App() {
    return (
      <>
        <Navbar/>
        <Routes>
          <Route path={routes.home} element={<Home/>}/>
          <Route path={routes.contacto} element={<Contacto/>}/>
          <Route path={routes.detalle+"/:id"} element={<DetalleBeer/>}/>
          <Route path={routes.notFound} element={<Error404/>}/>
        </Routes>
      </>
    );
}

export default App;
