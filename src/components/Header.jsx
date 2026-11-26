import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";

function Header() {
  const [oscuro, setOscuro] = useState(
    () => localStorage.getItem("tema") === "oscuro"
  );

  useEffect(() => {
    document.body.classList.toggle("oscuro", oscuro);
    localStorage.setItem("tema", oscuro ? "oscuro" : "claro");
  }, [oscuro]);

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
              <button
                className="btn-tema"
                type="button"
                onClick={() => setOscuro(!oscuro)}
                aria-label={oscuro ? "Activar modo claro" : "Activar modo oscuro"}
              >
                <i className={oscuro ? "fa-solid fa-sun" : "fa-solid fa-moon"}></i>
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;