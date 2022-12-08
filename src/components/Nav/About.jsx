import s from "./About.module.css";

export default function About() {
    return (
        <div className={s.divContainer}>
          <div>
            <h1>Creado por <br/>Erik Filleaudeau</h1>
          </div>
          <hr />
            <img
              src="https://media-exp1.licdn.com/dms/image/D4D03AQFYLr0OiTvgRA/profile-displayphoto-shrink_800_800/0/1668778968006?e=1675296000&v=beta&t=RvOWg7p8d8VFd4n8XXKySaXq2O36bMP9PSHfZjb5dY0"
              alt="Foto de Erik"
              width="100%"
              height= "auto"
            />
          <hr />
          <div>
            <p>
              <b>Diseñador Gráfico</b> y <b>Editor de Video</b> con base en la
              ciudad de La Plata, con <b> amplia experiencia</b> y{" "}
              <b> conocimientos</b> en dichas áreas.
            </p>
  
            <p>
              Son estos conocimientos y experiencia, mas el constante aprendizaje y
              ajuste de <b>habilidades blandas</b>, y una gran capacidad para la{" "}
              <b>organización</b>, <b>comunicación</b> y <b>aprendizaje rápido</b>{" "}
              a través de la investigación, los que me han permitido alcanzar el
              rango de <b>director creativo</b> en proyectos con{" "}
              <b>equipos de trabajo multidisciplinarios</b>.
            </p>
          </div>
        </div>
    );
  }
  