import React from "react";
import { Link, useLocation } from "@remix-run/react";
import imagen from "../../public/img/carrito.png";

function Navegacion() {
  const location = useLocation();
  return (
    <div>
      <nav className="navegacion">
        <Link
          to={"/"}
          className={location.pathname === "/" ? "active" : "isnotActive"}
        >
          Inicio
        </Link>
        <Link
          to={"/nosotros"}
          className={
            location.pathname === "/nosotros" ? "active" : "isnotActive"
          }
        >
          Nosotros
        </Link>
        <Link
          to={"/guitarras"}
          className={
            location.pathname === "/guitarras" ? "active" : "isnotActive"
          }
        >
          Tienda
        </Link>
        <Link
          to={"/posts"}
          className={location.pathname === "/posts" ? "active" : "isnotActive"}
        >
          Blog
        </Link>
        <Link to={"/carrito"}>
          <img src={imagen} alt="Carrito de compras" />
        </Link>
      </nav>
    </div>
  );
}

export default Navegacion;
