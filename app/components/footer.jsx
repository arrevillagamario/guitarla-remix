import React from "react";
import Navegacion from "./navegacion";

function Footer() {
  return (
    <div>
      <footer className="footer">
        <div className="contenedor contenido">
          <Navegacion />
          <p className="copyright copy">
            Todos los derechos reservados {new Date().getFullYear()}
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
