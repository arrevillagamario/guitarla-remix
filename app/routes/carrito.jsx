import { useState, useEffect } from "react";
import styles from "../styles/carrito.css";
import { useOutletContext } from "@remix-run/react";

export function links() {
  return [
    {
      rel: "stylesheet",
      href: styles,
    },
  ];
}

export function meta() {
  return [
    {
      title: "GuitarLA - carrito de compras",
      description:
        "Venta de guitarras, música, blog, carrito de compras, tienda",
    },
  ];
}

const Carrito = () => {
  const [total, setTotal] = useState(0);
  const [bandera, setBandera] = useState(false);
  const data = useOutletContext();

  const { carrito, actualizarCantidad, eliminarGuitarra } = data;

  useEffect(() => {
    const calculo = carrito.reduce(
      (total, producto) => total + producto.cantidad * producto.precio,
      0
    );
    setTotal(calculo);
  }, [carrito]);

  return (
    <main className="contenedor">
      <h1 className="heading">Carrito de compras</h1>
      <div className="contenido">
        <div className="carrito">
          <h2 className="carrito">Articulos</h2>
          {carrito?.length === 0
            ? "Carrito vacío"
            : carrito?.map((producto) => (
                <div key={producto.id} className="producto">
                  <div>
                    <img
                      src={producto.imagen}
                      alt={`Imagen del producto ${producto.nombre}`}
                    />
                  </div>
                  <div>
                    <p className="nombre">{producto.nombre}</p>
                    <p className="cantidad">Cantidad:</p>
                    <select
                      value={producto.cantidad}
                      className="select"
                      onChange={(e) =>
                        actualizarCantidad({
                          cantidad: parseInt(e.target.value),
                          id: producto.id,
                        })
                      }
                    >
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                    </select>
                    <p className="precio">
                      <span>${producto.precio}</span>
                    </p>
                    <p className="subtotal">
                      Subtotal:
                      <span>${producto.precio * producto.cantidad}</span>
                    </p>
                  </div>
                  <button
                    type="button"
                    className="btn-eliminar"
                    onClick={() => eliminarGuitarra(producto.id)}
                  >
                    x
                  </button>
                </div>
              ))}
        </div>

        <aside className="resumen">
          <h3 className="resumen">Resumen del pedido</h3>
          <p>Total a pagar: ${total}</p>
        </aside>
      </div>
    </main>
  );
};

export default Carrito;
