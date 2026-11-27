import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { usePedidos } from "../context/PedidosContext";
import TarjetaPedido from "../components/TarjetaPedido";

function Seguimiento() {
  const { pedidos } = usePedidos();
  const [searchParams] = useSearchParams();
  const codigoInicial = (searchParams.get("codigo") || "").toUpperCase();

  const [texto, setTexto] = useState(codigoInicial);
  const [termino, setTermino] = useState(codigoInicial);
  const [seleccionado, setSeleccionado] = useState(null);

  const buscado = termino.trim().toUpperCase();
  const filtrados =
    buscado === ""
      ? pedidos
      : pedidos.filter(
          (p) =>
            p.codigo.includes(buscado) ||
            p.cliente.toUpperCase().includes(buscado)
        );

  const pedidoSeleccionado = pedidos.find((p) => p.codigo === seleccionado);

  function buscar(evento) {
    evento.preventDefault();
    setTermino(texto);
  }

  function mostrarTodos() {
    setTexto("");
    setTermino("");
  }

  function cerrarModal() {
    setSeleccionado(null);
  }

  return (
    <>
      <main>
        <div className="contenedor">
          <h1>Seguimiento de producto</h1>
          <p>Consulta el estado en tiempo real de tus envíos en Lima.</p>
          <br />
          <form className="buscador" onSubmit={buscar}>
            <input
              type="text"
              name="codigo"
              placeholder="Ej: CP-10231"
              value={texto}
              onChange={(e) => setTexto(e.target.value)}
              onBlur={() => setTexto(texto.trim().toUpperCase())}
            />
            <button className="boton morado" type="submit">
              <i className="fa-solid fa-magnifying-glass"></i> Buscar
            </button>
            <button className="boton" type="button" onClick={mostrarTodos}>
              Ver todos
            </button>
          </form>
          <br />

          {filtrados.length === 0 && (
            <>
              <p style={{ color: "#DC2626", fontWeight: "bold" }}>
                No se encontraron pedidos con ese código.
              </p>
              <br />
            </>
          )}

          <div className="tarjetas">
            {filtrados.map((pedido) => (
              <TarjetaPedido
                key={pedido.codigo}
                pedido={pedido}
                onVerFicha={setSeleccionado}
              />
            ))}
          </div>
        </div>
      </main>

      {pedidoSeleccionado && (
        <div
          className="modal"
          onClick={(e) => {
            if (e.target === e.currentTarget) cerrarModal();
          }}
        >
          <div className="modal-caja">
            <button className="modal-cerrar" type="button" onClick={cerrarModal}>
              &times;
            </button>
            <h3>Detalle del Envío {pedidoSeleccionado.codigo}</h3>
            <br />
            <p><strong>Cliente:</strong> {pedidoSeleccionado.cliente}</p>
            <p><strong>Producto:</strong> {pedidoSeleccionado.producto}</p>
            <p><strong>Distrito:</strong> {pedidoSeleccionado.distrito}, Lima</p>
            <p><strong>Estado actual:</strong> {pedidoSeleccionado.estado}</p>
            <p><strong>Última actualización:</strong> {pedidoSeleccionado.fecha}</p>
            <br />
            <button className="boton morado" type="button" onClick={cerrarModal}>
              Cerrar
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default Seguimiento;