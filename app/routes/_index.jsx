import { getGuitarras } from "../models/guitarras.server.js";
import { getPosts } from "../models/posts.server.js";
import { getCurso } from "../models/curso.server.js";
import stylesGuitarras from "../styles/guitarras.css";
import stylesBlog from "../styles/blog.css";
import { useLoaderData } from "@remix-run/react";
import ListadoGuitarras from "../components/listado-guitarras.jsx";
import ListadoPosts from "../components/listado-posts.jsx";
import Curso from "../components/curso.jsx";
import stylesCurso from "../styles/curso.css";

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
    {
      rel: "stylesheet",
      href: stylesCurso,
    },
  ];
}

export async function loader() {
  const [guitarras, posts, curso] = await Promise.all([
    getGuitarras(),
    getPosts(),
    getCurso(),
  ]);

  return {
    guitarras: guitarras.data,
    posts: posts.data,
    curso: curso.data,
  };
}

function _index() {
  const datos = useLoaderData();

  const { guitarras, posts, curso } = datos;

  return (
    <>
      <main className="contenedor">
        <ListadoGuitarras guitarras={guitarras} />
      </main>
      <Curso curso={curso.attributes} />
      <section className="contenedor">
        <ListadoPosts posts={posts} />
      </section>
    </>
  );
}

export default _index;
