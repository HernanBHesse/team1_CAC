//Router DOM
import { Link } from "react-router-dom";

//CSS
import "./styles.css";

const tiendas = ["Mc_Donalls", "Burger_King", "Mi_Gusto"];
const categorias = ["Hamburguesas", "Asado", "Bebidas"];

const NavBar = () => {
  return (
    <div className="App-header">
      <nav className="navBar-links">
        <ul>
          <li>
            <Link to={`/`} key={"inicioLink"}>
              Inicio
            </Link>
          </li>
          <li>
            <Link to={`/categorias`} key={"categoriasLink"}>
              Categorías
            </Link>
            <ul className="subMenu">
              {categorias.map((url) => {
                return (
                  <li>
                    <Link to={`/categorias/${url}`} key={`${url}Link`}>
                      {url}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </li>
          <li>
            <Link to={`/tiendas`} key={"tiendaLink"}>
              Tiendas
            </Link>
            <ul className="subMenu">
              {tiendas.map((url) => {
                return (
                  <li>
                    <Link to={`/tiendas/${url}`} key={`${url}Link`}>
                      {url}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
