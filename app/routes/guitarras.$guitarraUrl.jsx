import { useState } from "react";
import { getGuitarra } from "../models/guitarras.server.js";
import { useLoaderData, useOutletContext } from "@remix-run/react";

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
  const data = useOutletContext();

  const [cantidad, setCantidad] = useState(0);
  const guitarra = useLoaderData();
  const { nombre, descripcion, precio, imagen } = guitarra.data[0].attributes;

  const handleSubmit = (e) => {
    e.preventDefault();

    if (cantidad < 1) {
      alert("Debes seleccionar una cantidad");
      return;
    }

    const guitarraSeleccionada = {
      id: guitarra.data[0].id,
      imagen: imagen.data.attributes.url,
      nombre,
      precio,
      cantidad,
    };
    data.agregarCarrito(guitarraSeleccionada);
  };
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
        <form className="formulario" onSubmit={handleSubmit}>
          <label htmlFor="cantidad">Cantidad</label>
          <select
            id="cantidad"
            onChange={(e) => setCantidad(parseInt(e.target.value))}
          >
            <option value="0">--Seleccione--</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
          <input type="submit" value="Agregar al carrito" />
        </form>
      </div>
    </div>
  );
};

export default Guitarra;
