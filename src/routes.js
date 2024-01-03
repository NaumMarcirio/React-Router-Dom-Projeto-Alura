import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./paginas/Home";
import SobreMim from "./paginas/SobreMim";
import Menu from "./componentes/Menu";
import Rodape from "./componentes/Rodape";
import PaginaPadrao from "./componentes/PaginaPadrao";
import Post from "./paginas/Post";
import Erro404 from "./paginas/Erro404";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path="/" element={<PaginaPadrao />}>
          <Route path="/" element={<Home />} />
          <Route path="/sobremim" element={<SobreMim />} />
        </Route>
        <Route path="/posts/:id/*" element={<Post />} />

        <Route path="*" element={<Erro404 />} />
      </Routes>
      <Rodape />
    </BrowserRouter>
  );
}

export default AppRoutes;
