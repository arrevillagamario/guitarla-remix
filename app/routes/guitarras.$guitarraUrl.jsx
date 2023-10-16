import React from "react";
import { getGuitarra } from "../models/guitarras.server.js";
import { useLoaderData } from "@remix-run/react";

export async function loader(data) {
  const { params } = data;
  const guitarraUrl = params.guitarraUrl;
  const guitarra = await getGuitarra(guitarraUrl);

  if (guitarra.data.length === 0) {
    throw new Response({
      status: 404,
      statusText: "Guitarra no encontrada",
    });
  } else {
    return guitarra;
  }
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

const Guitarra = () => {
  const guitarra = useLoaderData();
  const { nombre, descripcion, precio, imagen } = guitarra.data[0].attributes;
  return (
    <div className="guitarra">
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
    </div>
  );
};

export default Guitarra;
