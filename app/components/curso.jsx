const Curso = ({ curso }) => {
  const { titulo, contenido, imagen } = curso;
  return (
    <section className="curso">
      <style jsx={true}>
        {`
          .curso {
            background-image: linear-gradient(
                to right,
                rgb(0 0 0 / 0.65),
                rgb(0 0 0 / 0.7)
              ),
              url(${curso.imagen.data.attributes.url});
            padding: 6rem 0;
            background-size: cover;
            background-position: center;
          }
        `}
      </style>
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
