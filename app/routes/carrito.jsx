import styles from "../styles/carrito.css";

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
  return (
    <main className="contenedor">
      <h1 className="heading">Carrito de compras</h1>
      <div className="contenido">
        <div className="carrito">
          <h2 className="carrito">Articulos</h2>
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
