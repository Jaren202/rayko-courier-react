import { createContext, useContext, useEffect, useState } from "react";

const STORAGE_PEDIDOS = "rayko_pedidos_v1";

const PEDIDOS_INICIALES = [
  { codigo: "CP-10231", cliente: "Carlos Mendoza", producto: "Audífonos Bluetooth", distrito: "Miraflores", estado: "En almacén", fecha: "10/10/2026" },
  { codigo: "CP-10232", cliente: "Lucía Torres", producto: "Zapatillas running", distrito: "San Borja", estado: "En ruta", fecha: "13/10/2026" },
  { codigo: "CP-10233", cliente: "Jorge Ramos", producto: "Cafetera eléctrica", distrito: "Surco", estado: "Entregado", fecha: "12/10/2026" },
  { codigo: "CP-10234", cliente: "Ana Quispe", producto: "Teclado mecánico", distrito: "La Molina", estado: "En almacén", fecha: "10/10/2026" },
  { codigo: "CP-10235", cliente: "Pedro Salas", producto: "Mochila impermeable", distrito: "Barranco", estado: "En ruta", fecha: "13/10/2026" },
];

function cargarPedidos() {
  try {
    const guardados = localStorage.getItem(STORAGE_PEDIDOS);
    if (guardados) return JSON.parse(guardados);
  } catch (error) {
    console.log("No se pudieron leer los pedidos guardados:", error);
  }
  return [...PEDIDOS_INICIALES];
}

const PedidosContext = createContext(null);

export function PedidosProvider({ children }) {
  const [pedidos, setPedidos] = useState(cargarPedidos);

  useEffect(() => {
    localStorage.setItem(STORAGE_PEDIDOS, JSON.stringify(pedidos));
  }, [pedidos]);

  return (
    <PedidosContext.Provider value={{ pedidos, setPedidos }}>
      {children}
    </PedidosContext.Provider>
  );
}

export function usePedidos() {
  return useContext(PedidosContext);
}