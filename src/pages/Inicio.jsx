import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Inicio() {
  const [codigo, setCodigo] = useState("");
  const navigate = useNavigate();

  function buscar(evento) {
    evento.preventDefault();
    const codigoFormateado = codigo.trim().toUpperCase();
    navigate(`/seguimiento?codigo=${encodeURIComponent(codigoFormateado)}`);
  }

  return (
    <>
      <section className="hero">
        <div className="contenedor">
          <div>
            <h1>Rápido como el Rayo</h1>
            <p>
              Ingresa tu código de producto y mira si está en almacén, en ruta o
              ya fue entregado.
            </p>
            <form className="buscador" onSubmit={buscar}>
              <input
                type="text"
                placeholder="Ej: CP-10231"
                value={codigo}
                onChange={(e) => setCodigo(e.target.value)}
                onBlur={() => setCodigo(codigo.trim().toUpperCase())}
                required
              />
              <button className="boton" type="submit">
                <i className="fa-solid fa-magnifying-glass"></i> Rastrear
              </button>
            </form>
          </div>
          <picture>
            <source media="(max-width: 600px)" srcSet="/img/Paquete.png" />
            <img
              src="/img/hero.png"
              alt="Camión de Rayko Courier"
              width="480"
              height="340"
            />
          </picture>
        </div>
      </section>

      <main>
        <div className="contenedor">
          <section>
            <h2 className="centro">¿Cómo funciona?</h2>
            <div className="tarjetas">
              <article className="tarjeta almacen">
                <div className="icono">
                  <i className="fa-solid fa-warehouse"></i>
                </div>
                <h3>1. En almacén</h3>
                <p>
                  Tu producto fue recibido y está siendo preparado por el área
                  de despacho.
                </p>
              </article>
              <article className="tarjeta ruta">
                <div className="icono">
                  <i className="fa-solid fa-truck-fast"></i>
                </div>
                <h3>2. En ruta</h3>
                <p>
                  El repartidor ya salió con tu pedido y va camino a tu
                  dirección.
                </p>
              </article>
              <article className="tarjeta entregado">
                <div className="icono">
                  <i className="fa-solid fa-circle-check"></i>
                </div>
                <h3>3. Entregado</h3>
                <p>
                  El repartidor confirma la entrega y la empresa queda
                  informada.
                </p>
              </article>
            </div>
          </section>

          <section>
            <h2 className="centro">Garantía y seguridad</h2>
            <div className="tarjetas">
              <article className="tarjeta">
                <div className="icono">
                  <i className="fa-solid fa-lock"></i>
                </div>
                <h3>Envíos protegidos</h3>
                <p>
                  Cada paquete se registra con un código único desde que entra
                  al almacén.
                </p>
              </article>
              <article className="tarjeta">
                <div className="icono">
                  <i className="fa-solid fa-bolt"></i>
                </div>
                <h3>Entregas rápidas</h3>
                <p>
                  Rutas organizadas para que tu pedido llegue en el menor tiempo
                  posible.
                </p>
              </article>
              <article className="tarjeta">
                <div className="icono">
                  <i className="fa-solid fa-medal"></i>
                </div>
                <h3>Garantía de entrega</h3>
                <p>
                  Si algo sale mal con tu envío, te acompañamos hasta
                  resolverlo.
                </p>
              </article>
            </div>
          </section>

          <section className="centro">
            <h2>Acceso para el personal</h2>
            <p>Despachador, repartidor y administrador ingresan desde aquí.</p>
            <br />
            <Link className="boton morado" to="/login">
              Ingresar al sistema
            </Link>
          </section>
        </div>
      </main>
    </>
  );
}

export default Inicio;