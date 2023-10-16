import styles from "../styles/guitarras.css";
import { Outlet, useOutletContext } from "@remix-run/react";

export const links = () => {
  return [
    {
      rel: "stylesheet",
      href: styles,
    },
  ];
};

function Tienda() {
  return (
    <div>
      <main className="contenedor">
        <Outlet context={useOutletContext()} />
      </main>
    </div>
  );
}

export default Tienda;
