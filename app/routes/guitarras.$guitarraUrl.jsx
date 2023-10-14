import React from "react";
import { getGuitarra } from "../models/guitarras.server.js";
import { useLoaderData } from "@remix-run/react";
import styles from "../styles/guitarras.css";

export async function loader(req) {
  const guitarraUrl = req.params.guitarraUrl;
  const guitarra = await getGuitarra(guitarraUrl);

  return guitarra;
}

export function meta({ data }) {
  const { nombre } = data.data[0].attributes;
  return [
    {
      title: `GuitarLA - ${nombre}`,
      description: `Guitarras, Venta de guitarras, Guitarra ${nombre}`,
    },
  ];
}

export function links() {
  return [
    {
      rel: "stylesheet",
      href: styles,
    },
  ];
}
const Guitarra = () => {
  const guitarra = useLoaderData();
  const { nombre, descripcion, precio, imagen } = guitarra.data[0].attributes;
  return (
    <main className="contenedor guitarra">
      <img
        src={imagen.data.attributes.url}
        alt={`Imagen de guitarra ${nombre}`}
        className="imagen"
      />

      <div className="contenido">
        <h3>{nombre}</h3>
        <p className="texto">{descripcion}</p>
        <p className="precio">${precio}</p>
      </div>
    </main>
  );
};

export default Guitarra;
