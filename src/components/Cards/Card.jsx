/*

- ¿Que hace? 
Recibe de <Cards /> las props con la info que se va a mostrar en el componente y la función onClose, para cerrar la tarjeta
Se encarga de mostrar la info de cada cosa que traigamos, mapeandolo en un <div />.

- ¿De donde viene la info? 
<App /> → <Cards /> → **<Card />**

*/

export default function Card(props) {
  return (
    <div>
      <button onClick={() => props.onClose(props.idDrink)}>X</button>
      <p>{props.strAlcoholic}</p>
      <h1>{props.strDrink}</h1>
      <img src={props.strImageSource} alt={props.strDrink} />
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
