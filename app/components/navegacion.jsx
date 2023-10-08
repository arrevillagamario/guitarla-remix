import React from "react";
import { Link, useLocation } from "@remix-run/react";

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
          to={"/tienda"}
          className={location.pathname === "/tienda" ? "active" : "isnotActive"}
        >
          Tienda
        </Link>
        <Link
          to={"/blog"}
          className={location.pathname === "/blog" ? "active" : "isnotActive"}
        >
          Blog
        </Link>
      </nav>
    </div>
  );
}

export default Navegacion;
