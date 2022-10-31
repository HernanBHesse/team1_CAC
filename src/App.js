//Router DOM
import { Routes, Route } from "react-router-dom";

//Paginas
import { Home, Categories, Shops, PageNotFound } from "./pages";

//Componentes
import { NavBar } from "./components";

//Context

//CSS
import "./App.css";

function App() {
  const menus = ["Inicio", "Tiendas", "Categorías"];

  return (
    <div className="App">
      <NavBar itemsNavBar={menus} />
      <Routes>
        <Route path="*" element={<PageNotFound />} />
        <Route path="/" element={<Home />} />
        <Route path="/categorias/:categorias" element={<Categories />} />
        <Route path="/tiendas/:tiendas" element={<Shops />} />
      </Routes>
    </div>
  );
}

export default App;
