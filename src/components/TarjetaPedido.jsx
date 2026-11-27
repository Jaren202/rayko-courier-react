function obtenerClaseEstado(estado) {
  if (estado === "En almacén") return "almacen";
  if (estado === "En ruta") return "ruta";
  return "entregado";
}

function TarjetaPedido({ pedido, onVerFicha }) {
  const clase = obtenerClaseEstado(pedido.estado);
  const esAlmacen = pedido.estado === "En almacén";
  const esRuta = pedido.estado === "En ruta";
  const esEntregado = pedido.estado === "Entregado";

  return (
    <article className={`tarjeta ${clase}`}>
      <h3>Código {pedido.codigo}</h3>
      <span className={`estado ${clase}`}>{pedido.estado}</span>
      <ol className="linea">
        <li className={`hecho ${esAlmacen ? "actual" : ""}`}>
          <i className="fa-solid fa-warehouse"></i>
          <br />
          En almacén
        </li>
        <li className={`${esRuta || esEntregado ? "hecho" : ""} ${esRuta ? "actual" : ""}`}>
          <i className="fa-solid fa-truck-fast"></i>
          <br />
          En ruta
        </li>
        <li className={esEntregado ? "hecho actual" : ""}>
          <i className="fa-solid fa-circle-check"></i>
          <br />
          Entregado
        </li>
      </ol>
      <p><strong>Cliente:</strong> {pedido.cliente}</p>
      <p><strong>Producto:</strong> {pedido.producto}</p>
      <p><strong>Destino:</strong> {pedido.distrito}, Lima</p>
      <p><strong>Actualizado:</strong> {pedido.fecha}</p>
      <br />
      <button
        className="boton morado"
        type="button"
        onClick={() => onVerFicha(pedido.codigo)}
      >
        Ver ficha
      </button>
    </article>
  );
}

export default TarjetaPedido;