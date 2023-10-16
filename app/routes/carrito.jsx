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
  const data = useOutletContext();

  const { carrito } = data;
  return (
    <main className="contenedor">
      <h1 className="heading">Carrito de compras</h1>
      <div className="contenido">
        <div className="carrito">
          <h2 className="carrito">Articulos</h2>
          {carrito.length === 0
            ? "Carrito vacío"
            : carrito.map((producto) => (
                <div key={producto.id} className="producto">
                  <div>
                    <img
                      src={producto.imagen}
                      alt={`Imagen del producto ${producto.nombre}`}
                    />
                  </div>
                  <div>
                    <p className="nombre">{producto.nombre}</p>
                    <p className="cantidad">Cantidad: {producto.cantidad}</p>
                    <p className="precio">
                      Precio unitario: $<span>{producto.precio}</span>
                    </p>
                    <p className="subtotal">
                      Subtotal: $
                      <span>{producto.precio * producto.cantidad}</span>
                    </p>
                  </div>
                </div>
              ))}
        </div>
        <aside className="resumen">
          <h3 className="resumen">Resumen del pedido</h3>
          <p>Total a pagar: $</p>
        </aside>
      </div>
    </main>
  );
};

export default Carrito;
