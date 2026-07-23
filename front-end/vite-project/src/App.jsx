import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import PaginaInicial from "./pages/PaginaInicial";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/pagina-inicial" element={<PaginaInicial />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
