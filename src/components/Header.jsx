import { Link, NavLink } from "react-router-dom";

function Header() {
  return (
    <header>
      <div className="contenedor">
        <Link className="logo" to="/">
          <i className="fa-solid fa-shield-halved"></i> Rayko Courier
        </Link>
        <button className="btn-hamburguesa" type="button" aria-label="Abrir menú">
          <i className="fa-solid fa-bars"></i>
        </button>
        <nav id="navPrincipal">
          <ul>
            <li>
              <NavLink to="/" end className={({ isActive }) => (isActive ? "activo" : "")}>
                Inicio
              </NavLink>
            </li>
            <li>
              <NavLink to="/seguimiento" className={({ isActive }) => (isActive ? "activo" : "")}>
                Seguimiento
              </NavLink>
            </li>
            <li>
              <NavLink to="/login" className={({ isActive }) => (isActive ? "activo" : "")}>
                Ingresar
              </NavLink>
            </li>
            <li>
              <button className="btn-tema" type="button">
                <i className="fa-solid fa-calculator"></i> Cotizar
              </button>
            </li>
            <li>
              <button className="btn-tema" type="button" aria-label="Activar modo oscuro">
                <i className="fa-solid fa-moon"></i>
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;