import { useLoaderData } from "@remix-run/react";
import { getGuitarras } from "../models/guitarras.server.js";
import ListadoGuitarras from "../components/listado-guitarras.jsx";

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
      <ListadoGuitarras guitarras={guitarras} />
    </div>
  );
}

export default Tienda;
