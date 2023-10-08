import React from "react";
import { useLoaderData } from "@remix-run/react";
import { getGuitarras } from "../models/guitarras.server.js";
import Guitarra from "../components/guitarra.jsx";
import styles from "../styles/guitarras.css";

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
        <h2 className="heading">Nuestra colección</h2>
        {guitarras?.length && (
          <div className="guitarras-grid">
            {guitarras?.map((guitarra) => (
              <Guitarra key={guitarra?.id} guitarra={guitarra?.attributes} />
            ))}
          </div>
        )}
      </main>
    </div>
  );
}

export default Tienda;
