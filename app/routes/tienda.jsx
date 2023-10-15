import React from "react";
import { useLoaderData } from "@remix-run/react";
import { getGuitarras } from "../models/guitarras.server.js";
import styles from "../styles/guitarras.css";
import ListadoGuitarras from "../components/listado-guitarras.jsx";

export const links = () => {
  return [
    {
      rel: "stylesheet",
      href: styles,
    },
  ];
};

export const meta = (params) => {
  return [
    {
      title: "GuitarLa - Tienda de Guitarras",
      description: "Nuestra tienda de guitarras",
    },
  ];
};

export async function loader() {
  const guitarras = await getGuitarras();

  return guitarras.data;
}
function Tienda() {
  const guitarras = useLoaderData();

  return (
    <div>
      <main className="contenedor">
        <ListadoGuitarras guitarras={guitarras} />
      </main>
    </div>
  );
}

export default Tienda;
