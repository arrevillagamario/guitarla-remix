import { getGuitarras } from "../models/guitarras.server.js";
import { getPosts } from "../models/posts.server.js";
import stylesGuitarras from "../styles/guitarras.css";
import stylesBlog from "../styles/blog.css";
import { useLoaderData } from "@remix-run/react";

export function meta() {
  return [];
}

export function links() {
  return [
    {
      rel: "stylesheet",
      href: stylesGuitarras,
    },
    {
      rel: "stylesheet",
      href: stylesBlog,
    },
  ];
}

export async function loader() {
  const guitarras = await getGuitarras();

  return guitarras.data;
}

function _index() {
  const guitarras = useLoaderData();

  const { nombre, descripcion, precio, imagen } = guitarras[0].attributes;

  return (
    <div>
      <h1></h1>
    </div>
  );
}

export default _index;
