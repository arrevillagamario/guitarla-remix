import { useState } from "react";
import {
  Meta,
  Links,
  Outlet,
  Scripts,
  LiveReload,
  useRouteError,
  isRouteErrorResponse,
  Link,
} from "@remix-run/react";
import style from "./styles/index.css";
import Header from "./components/header";
import Footer from "./components/footer";

//Aqui definimos la funcion meta que es la que se tomara en el html mediante el metodo de Meta de Remix
export function meta() {
  return [
    {
      //Basicamente se coloca lo que lleva un html normal en el head
      charset: "utf-8",
      title: "GuitarLa-Remix",
      viewport: "width=device-width, initial-scale=1",
    },
  ];
}

//Aqui colocamos las ojas de estilo, fuentes, etc; que seran las que utilizaremos para el proyecto que posteriormente se pondran con el metodo de Links en el codigo html (Es importante llamar la funcion con el nombre de links ya que asi la reconocera remix)
export function links() {
  return [
    //Es importante normlizar as hojas de estilos con normalize esta normalizacion siempre debe de ir priero
    {
      rel: "stylesheet",
      href: "https://necolas.github.io/normalize.css/8.0.1/normalize.css",
    },
    {},
    {
      rel: "stylesheet",
      href: style,
    },

    {
      rel: "preconnect",
      href: "https://fonts.googleapis.com",
    },
    {
      rel: "preconnect",
      href: "https://fonts.gstatic.com",
      crossOrigin: "true",
    },
    {
      href: "https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700;800;900&display=swap",
      rel: "stylesheet",
    },
  ];
}

export default function App() {
  const [carrito, setCarrito] = useState([]);

  const agregarCarrito = (guitarra) => {
    setCarrito([...carrito, guitarra]);
  };
  return (
    //En la funcion principal retornamos la fucion document que es donde se alojara el archivo html
    <Document>
      {/* Con el outlet podremos mostrar el contenido de las demas paginas */}
      <Outlet
        context={{
          agregarCarrito,
        }}
      />
    </Document>
  );
}

function Document({ children }) {
  return (
    <html lang="es">
      <head>
        {/* En el head tanto como en un html normal podremos implementar el meta y las hojas de estilos con los metodos que ya trae remix  */}
        <Meta />
        <Links />
      </head>
      <body>
        {/* Estamos implementando el componente de header ya que sera el layout que nos aparecera en cada una de las paginas */}
        <Header />
        {/*   Y en el children tal y como podemos ver ira toda la informacion que nosotros trabajemos en la funcion app, es decir, esta funcion recibira como parametro lo que se trabaje en el App */}
        {children}

        <Footer />

        {/* Este metodo de remix ayuda a rederizar mejor el cambio de las paginas */}
        <Scripts />

        {/* Este metodo de remix ayuda a recargar el proyecto en automatico cuando se hace un cambio en el codigo */}
        <LiveReload />
      </body>
    </html>
  );
}
export function ErrorBoundary() {
  const error = useRouteError();

  if (isRouteErrorResponse(error)) {
    return (
      <Document>
        <p className="error">
          {error.status} {error.statusText}
        </p>
        <Link className="error-enlace" to={"/"}>
          {" "}
          Tal vez quieras volver a la pagina principal
        </Link>
      </Document>
    );
  }
}
