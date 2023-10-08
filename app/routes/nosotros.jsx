import React from "react";
import imagen from "../../public/img/nosotros.jpg";
import styles from "../styles/nosotros.css";
//Implementamos una funcion meta que se mostrara cuando el sitio se encuentre en la pagina de nosotros

export function meta() {
  return [
    {
      title: "GuitarLa - Sobre nosotros",
      description: "Venta de guitarras , blog de musica y demas",
    },
  ];
}

export function links() {
  return [
    {
      rel: "stylesheet",
      href: styles,
    },
    {
      rel: "preload",
      href: imagen,
      as: "image",
    },
  ];
}
function Nosotros() {
  return (
    <div>
      <main className="contenedor nosotros">
        <h1 className="heading"></h1>
        <div className="contenido">
          <img src={imagen} alt="imagen about us" />
          <div>
            <p>
              Aliquam erat volutpat. Proin in nibh malesuada, dapibus ante quis,
              commodo lorem. Donec facilisis vulputate velit, eget eleifend quam
              condimentum nec. Curabitur ipsum nulla, semper nec volutpat et,
              venenatis et mauris. Proin feugiat diam sit amet dolor dapibus
              condimentum. Aliquam vestibulum molestie augue id hendrerit. Cras
              ornare condimentum lorem id tristique. Praesent ultricies quam
              sagittis, laoreet turpis eu, ornare ante. Nunc facilisis vel neque
              sed tempus. Integer a leo eget tortor tincidunt venenatis porta ac
              quam. Ut quis mauris a sem pulvinar interdum. Pellentesque ut
              purus tempor, consectetur felis porttitor, egestas nibh. Aenean
              blandit urna in tristique facilisis. Sed pellentesque est ut
              cursus dapibus. Curabitur vel{" "}
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Nosotros;
