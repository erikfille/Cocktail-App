import Card from "./Card";
// import "./Cards.modules.css"

export default function Cards(props) {
  const { drinks, onClose } = props;
  return (
    <div>
      {drinks.map((d) => (
        <Card
          key={d.idDrink}
          idDrink={d.idDrink}
          strAlcoholic={d.strAlcoholic}
          strDrink={d.strDrink}
          strCategory={d.strCategory}
          strGlass={d.strGlass}
          strDrinkThumb={d.strDrinkThumb}
          onClose={onClose}
        />
      ))}
    </div>
  );
}
