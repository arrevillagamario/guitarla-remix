import { useLoaderData } from "@remix-run/react";
import { getPost } from "../models/posts.server.js";
import { formatearFecha } from "../utils/helpers.js";

export async function loader(data) {
  const { params } = data;
  const postUrl = params.postUrl;
  const post = await getPost(postUrl);

  if (post.data.length === 0) {
    throw new Response({
      status: 404,
      statusText: "Entrada no encontrada",
    });
  } else {
    return post.data;
  }
}

export function meta({ data }) {
  const { titulo } = data[0].attributes;
  return [
    {
      title: `GuitarLa - ${titulo}`,
      description: ``,
    },
  ];
}

const Post = () => {
  const post = useLoaderData();
  const { titulo, contenido, imagen, publishedAt } = post[0]?.attributes;
  return (
    <article className="post mt-3">
      <img
        src={imagen?.data?.attributes?.url}
        alt={`Imagen de blog ${titulo} `}
        className="imagen"
      />
      <div className="contenido">
        <h3>{titulo}</h3>
        <p className="fecha">{formatearFecha(publishedAt)}</p>
        <p className="texto">{contenido}</p>
      </div>
    </article>
  );
};

export default Post;
