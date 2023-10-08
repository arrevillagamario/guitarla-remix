import React from "react";
import logo from "../../public/img/logo.svg";
import { Link } from "@remix-run/react";
import Navegacion from "./navegacion";

function Header() {
  return (
    <header className="header">
      <div className="contenedor barra">
        <Link className="logo" to={"/"}>
          <img className="logo" src={logo} alt="Imagen de logo" />
        </Link>
        <Navegacion />
      </div>
    </header>
  );
}

export default Header;
