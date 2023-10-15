import React from "react";

const Curso = ({ curso }) => {
  const { titulo, contenido, imagen } = curso;
  return (
    <section className="curso">
      <div className="contenedor curso-grid">
        <div className="contenido">
          <h2 className="heading">{titulo}</h2>
          <p className="texto">{contenido}</p>
        </div>
      </div>
    </section>
  );
};

export default Curso;
