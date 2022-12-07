import s from "./Card.module.css";
import { Link } from "react-router-dom";

/*

- ¿Que hace? 
Recibe de <Cards /> las props con la info que se va a mostrar en el componente y la función onClose, para cerrar la tarjeta
Se encarga de mostrar la info de cada cosa que traigamos, mapeandolo en un <div />.

- ¿De donde viene la info? 
<App /> → <Cards /> → **<Card />**

*/

export default function Card(props) {

  console.log(props.idDrink)
  return (
    <div className={s.divContainer}>
      <button className={s.button} onClick={() => props.onClose(props.idDrink)}>
        X
      </button>
      <p className={s.hasAlcoholTag}>{props.strAlcoholic}</p>
      <Link to={`/drink/${props.idDrink}`}>
        <h1>{props.strDrink}</h1>
      </Link>
      <img src={props.strDrinkThumb} alt={props.strDrink} />
      <hr />
      <h2>Category:</h2>
      <p>{props.strCategory}</p>
      <h2>Serve better in:</h2>
      <p>{props.strGlass}</p>
    </div>
  );
}

/*

Mostramos:

Boton para cerrar
Si el trago es alcoholico
Nombre del trago
Imagen
Categoria del trago
Vaso para servir

*/
